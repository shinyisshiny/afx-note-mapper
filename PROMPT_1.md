Build a Max for Live MIDI device called SB AFX Note Mapper.

Read README.md and SPEC.md first.

Goal:
Create a working prototype of a Max for Live MIDI effect inspired by Bass Station II AFX mode.

Important:
This first phase is NOT the full finished device.
Do not implement advanced Live API mapping yet.
Do not focus on final styling yet.
Focus on architecture, data model, note storage, and UI skeleton.

Requirements:
- Ableton Live 12
- Max 8
- stock Max / Max for Live objects unless absolutely necessary
- clean patch structure
- clear comments
- presentation mode UI
- patch should be easy to extend later

Prototype features:
1. A mini 12-note piano UI to select the active note
2. 16 parameter lanes visible in the UI
3. Each lane should include:
   - enable toggle
   - current value control
   - min control
   - max control
   - mode placeholder or selector
4. Store unique lane data for each of the 12 notes
5. Switching note selection should recall that note's stored data
6. If practical, add copy, paste, and clear note functions
7. Keep the internal architecture modular and ready for later Live API mapping
8. Even though random behavior is not implemented yet, include fields for min, max, and mode in the data model so random-within-range can be added later without refactoring

Implementation guidance:
- Use dict, pattr, pattrstorage, or another structured approach suitable for per-note state
- Avoid messy patching
- Add TODO comments where Live API mapping will later be added
- Prioritize correctness and maintainability

Deliverables:
- working Max for Live device (.amxd) 
- underlying .maxpat patch
- brief architecture notes
- TODO list for phase 2
