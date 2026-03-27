# SPEC

## Device Type
Max for Live MIDI Effect

## Core Idea
The device stores 12 note-specific states.
Each note contains 16 assignable parameter lanes.

The user selects one note from a mini keyboard UI.
The user edits the 16 lanes for that note.
When that MIDI note is received, the device applies that note's stored values to mapped Ableton parameters.

## Per-Note Structure
12 notes total:
- C
- C#
- D
- D#
- E
- F
- F#
- G
- G#
- A
- A#
- B

Each note contains 16 lanes.

## Per-Lane Data Model
Each lane should store:
- enabled
- target_name
- target_reference
- current
- min
- max
- mode

Notes:
- V1 uses current as the active value
- min, max, and mode must still exist in the data model for future expansion
- mode will later support fixed and random behavior

## V1 Features
1. Mini 12-note piano UI to select active note
2. 16 visible parameter lanes
3. Each lane has:
   - enable toggle
   - current value control
   - min control
   - max control
   - mode field or mode placeholder
4. Switching notes recalls saved lane data for that note
5. Clean presentation mode layout
6. Patch should be modular and well-commented

## V1 Optional Features
- copy note
- paste note
- clear note

## Not Yet Required
- final Live API mapping implementation
- random within range behavior
- polyphonic per-note automation logic
- MPE support
- advanced bidirectional parameter feedback
- heavy custom UI code

## Mapping Direction for Later
When mapping is added, prefer:
- exposed Ableton device parameters
- Rack Macros
- parameters available reliably through the Live API

Do not attempt fake universal mapping hacks.
