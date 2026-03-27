# SB AFX Note Mapper - Prototype Architecture Notes

## Summary
This prototype separates **state management** from **UI controls** so Live API mapping can be added later without reworking note storage.

## Modules

1. **Presentation/UI Layer (`SB_AFX_Note_Mapper.maxpat`)**
   - 12-note selector (`radiogroup`) for C..B.
   - 16-lane editor represented by five `multislider` rows:
     - enable
     - current
     - min
     - max
     - mode
   - copy / paste / clear note buttons.
   - status text for quick feedback.

2. **State Engine (`sb_afx_note_mapper_state.js`)**
   - Owns note data model and recall logic.
   - Maintains 12 notes × 16 lanes.
   - Handles:
     - `note <index>` selection
     - `set <field> <16 values>` updates
     - `copy`, `paste`, `clear`
   - Outputs full lane lists to repopulate UI on note switch.

3. **Persistent Data (`dict sb_afx_state @embed 1`)**
   - Structured storage using a named `dict`.
   - Embedded in the patch for saved state.

## Data Model (per lane)
Each lane stores:
- `enabled`
- `target_name` (placeholder for phase 2)
- `target_reference` (placeholder for phase 2)
- `current`
- `min`
- `max`
- `mode`

## Why this structure is phase-2 ready
- State is centralized and not scattered across patch cords.
- UI messages are normalized (`set <field> ...`) so mapping modules can subscribe later.
- `target_name` / `target_reference` fields already exist, avoiding schema migration.
