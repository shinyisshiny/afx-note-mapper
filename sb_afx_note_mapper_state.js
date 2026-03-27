inlets = 1;
outlets = 6;

var NOTE_COUNT = 12;
var LANE_COUNT = 16;
var dictName = "sb_afx_state";
var state = new Dict(dictName);
var selectedNote = 0;
var clipboard = null;

function loadbang() {
    initialize();
    recall(selectedNote);
}

function initialize() {
    if (!state.contains("notes")) {
        var notes = [];
        for (var i = 0; i < NOTE_COUNT; i++) {
            notes.push(makeDefaultNote());
        }
        state.set("notes", notes);
    }
    if (!state.contains("meta")) {
        state.set("meta", {
            name: "SB AFX Note Mapper",
            version: 1,
            todo: "Live API mapping not implemented in prototype"
        });
    }
}

function makeDefaultNote() {
    var note = {
        lanes: []
    };

    for (var lane = 0; lane < LANE_COUNT; lane++) {
        note.lanes.push({
            enabled: 0,
            target_name: "",
            target_reference: "",
            current: 64,
            min: 0,
            max: 127,
            mode: 0
        });
    }

    return note;
}

function note(index) {
    initialize();
    var i = clamp(Math.floor(index), 0, NOTE_COUNT - 1);
    selectedNote = i;
    recall(selectedNote);
}

function set() {
    initialize();
    var args = arrayfromargs(arguments);
    if (args.length < 2) {
        return;
    }

    var field = args[0];
    var values = args.slice(1);
    var noteObj = getNote(selectedNote);

    for (var lane = 0; lane < LANE_COUNT; lane++) {
        var raw = (lane < values.length) ? values[lane] : 0;
        if (field === "enable") {
            noteObj.lanes[lane].enabled = raw >= 0.5 ? 1 : 0;
        } else if (field === "current") {
            noteObj.lanes[lane].current = clamp(Math.round(raw), 0, 127);
        } else if (field === "min") {
            noteObj.lanes[lane].min = clamp(Math.round(raw), 0, 127);
        } else if (field === "max") {
            noteObj.lanes[lane].max = clamp(Math.round(raw), 0, 127);
        } else if (field === "mode") {
            noteObj.lanes[lane].mode = clamp(Math.round(raw), 0, 3);
        }
    }

    setNote(selectedNote, noteObj);
    outlet(5, "status note " + selectedNote + " updated field " + field);
}

function copy() {
    initialize();
    clipboard = JSON.parse(JSON.stringify(getNote(selectedNote)));
    outlet(5, "status copied note " + selectedNote);
}

function paste() {
    initialize();
    if (clipboard === null) {
        outlet(5, "status clipboard empty");
        return;
    }
    setNote(selectedNote, JSON.parse(JSON.stringify(clipboard)));
    recall(selectedNote);
    outlet(5, "status pasted to note " + selectedNote);
}

function clear() {
    initialize();
    setNote(selectedNote, makeDefaultNote());
    recall(selectedNote);
    outlet(5, "status cleared note " + selectedNote);
}

function recall(index) {
    var noteObj = getNote(index);
    var en = [];
    var cur = [];
    var min = [];
    var max = [];
    var mode = [];

    for (var lane = 0; lane < LANE_COUNT; lane++) {
        en.push(noteObj.lanes[lane].enabled);
        cur.push(noteObj.lanes[lane].current);
        min.push(noteObj.lanes[lane].min);
        max.push(noteObj.lanes[lane].max);
        mode.push(noteObj.lanes[lane].mode);
    }

    outlet(0, en);
    outlet(1, cur);
    outlet(2, min);
    outlet(3, max);
    outlet(4, mode);
    outlet(5, "status recalled note " + index);
}

function getNote(index) {
    var path = "notes[" + index + "]";
    var n = state.get(path);
    if (n === null || n === undefined) {
        return makeDefaultNote();
    }
    return n;
}

function setNote(index, noteObj) {
    var path = "notes[" + index + "]";
    state.set(path, noteObj);
}

function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
}
