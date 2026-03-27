# afx-note-mapper

AFX Note Mapper is a Max for Live MIDI device inspired by the AFX mode on the Novation Bass Station II.

## Goal

Create a device that lets the user assign note-specific parameter behavior inside Ableton Live.

There are 12 note slots per octave:
C, C#, D, D#, E, F, F#, G, G#, A, A#, B

Each note stores independent settings for up to 16 assignable parameter lanes.

When a note is played, the device recalls and applies that note's stored parameter settings to mapped Ableton parameters.

## V1 Scope

Version 1 should focus on:

- 12-note selection via mini keyboard UI
- 16 parameter lanes
- per-note storage and recall
- clean presentation mode layout
- architecture ready for later Live API mapping
- architecture ready for later random-within-range

## Important Constraints

- Ableton Live 12
- Max 8 
- Prefer stock Max / Max for Live objects only
- No unnecessary externals
- Build for stability and clarity first
- Fancy visual styling comes after core functionality works

## Design Direction

The UI should feel minimal and modern, inspired by the Bass Station AFX layout.

Visual goals:
- clean and readable
- dark base
- colorful accents
- slightly funky Miami-style palette
- subtle gradient accents only if practical
