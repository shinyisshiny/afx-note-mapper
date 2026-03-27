# TODO - Phase 2

1. Add MIDI note input handling (`notein` / `midiparse`) and trigger lane application when matching note arrives.
2. Implement Live API target assignment workflow per lane:
   - map button / selected parameter capture
   - store `target_name` and `target_reference`
   - unmap handling
3. Build a mapping abstraction (subpatcher) so API errors do not affect UI/state.
4. Add mode behavior execution:
   - mode 0: fixed (`current`)
   - mode 1: random between `min` and `max`
   - future modes as extensible enum
5. Add validation rules:
   - enforce `min <= max`
   - clamp all values to target parameter ranges
6. Improve lane widgets from prototype rows to per-lane grouped controls.
7. Add optional per-note randomize and per-lane randomize tools.
8. Add performance optimizations for rapid note switching and dense MIDI streams.
9. Add test patch and diagnostic view for stored state inspection.
10. Polish visual style to match final AFX-inspired design system.
