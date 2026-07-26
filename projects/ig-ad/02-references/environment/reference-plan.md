# Environment Reference — ig-ad

## Confirmed: One Single Space

All six renders below are the **same real mancave complex**, seen from
different angles — not separate room options. It's an indoor lounge that
opens via full-height glass doors onto an enclosed, open-top bonsai
courtyard, with a wet bar off to one side.

- `RmIG9x16_Monkey_Lounge.png` — indoor lounge facing the built-ins: dark
  wood cabinets (books, cigar boxes, Iron Man figures), monkey-with-cigar
  painting, tan Eames chairs, glass-and-copper coffee table, orange rug
- `RmIG9x16_Darts_Lounge.png` — same lounge, facing the wet bar: granite
  counter, glass liquor shelves, "ALL POWER TO THE PEOPLE" tiger/panther
  poster, open cigar humidor
- `RmIG_ChessTable_Courtyard_View.png` — the carved chess set/table close
  up, courtyard visible through the glass doors behind it (yellow
  mid-century chairs, bonsai trees, stone walls)
- `RmIG_Lounge_CourtyardWide_View.png` — wide shot: green Eames lounge
  chairs in the foreground, glass doors open to the same courtyard
- `RmIG_Courtyard_Night_View.png` — night exterior view from the courtyard
  looking back in through the glass doors at the lounge (TV, green chairs)
- `RmIG9x16Yard_Monkey_CourtyardEntry.png` — courtyard entry view: bonsai
  trees, stone walls, glass doors open to reveal the lounge with the
  orange abstract painting and copper-topped bar visible inside

Common elements across all views: dark wood plank flooring, stone accent
walls, bonsai trees (indoor shelves and courtyard pots), a round
copper-rimmed glass coffee table with an ornate carved wooden chess set,
green/olive leather Eames-style lounge chairs, yellow mid-century chairs
in the courtyard, a wet bar with glass liquor shelving.

## Shot 05 Direction
Use this real space as the reveal environment. The elephant-head chair
(from `African_carved_chair_Original.jpeg`, the real photo) needs to be
composited into one of these views — most likely the lounge interior
(Monkey Lounge or the wide lounge/courtyard view) rather than the bar or
courtyard-only views, since that's where the seating/chess-table grouping
already reads as the "hang out" spot.

## Product Reference
- `02-references/product/African_carved_chair_Original.jpeg` — the actual
  finished chair photo; ground-truth identity reference for every shot.
- `02-references/product/VCarve_ElephantChair_SeatBack_ToolpathScreenshot.png`
  — VCarve toolpath screenshot used to correct the shot 04 CNC prompt.

## Brand Asset
- `00-admin/brand-assets/QT3D_Design_Logo.png` — confirmed: appears as a
  brief end-card after the chair reveal (shot 09 / final output), not as
  room decor.

## Open Questions
1. Which specific view/angle of this space should shot 05's hero frame
   use — the Monkey Lounge angle, the wide lounge/courtyard angle, or a
   new composite angle built to match the chair's photographed angle?
2. How many chairs in frame — the real photo shows one; default to one
   unless told otherwise.
