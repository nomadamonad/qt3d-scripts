# Environment Reference — ig-ad

## Confirmed: One Single Space

All renders below are the **same real mancave complex**, seen from
different angles. It's an indoor lounge that opens via full-height glass
doors onto an enclosed, open-top bonsai courtyard, with a wet bar off to
one side. Both wall-art pieces (monkey-with-cigar painting and the
"ALL POWER TO THE PEOPLE" panther artwork) hang near each other by the
bar — **panther piece is to the left of the monkey piece**.

- `RmIG9x16_Monkey_Lounge.png` — lounge facing the built-ins: dark wood
  cabinets (books, cigar boxes, Iron Man figures), monkey-with-cigar
  painting, tan Eames chairs, glass-and-copper coffee table, orange rug
- `RmIG9x16_Darts_Lounge.png` — same lounge, facing the wet bar: granite
  counter, glass liquor shelves, "ALL POWER TO THE PEOPLE" panther poster,
  open cigar humidor, dartboard
- `RmTV_WideBar_MonkeyPantherView.png` — wide shot of the bar wall showing
  both art pieces together: panther poster (smaller frame) to the left,
  monkey-with-cigar painting (large panorama frame) to the right, dartboard
  and whiskey shelving, green Eames chairs and chess table in front
- `RmYard_2_Bar_MonkeyPantherView.png` — courtyard-to-bar view: looking
  from the courtyard through the glass doors, both art pieces visible
  together inside, bar shelving lit warmly
- `RmIG_ChessTable_Courtyard_View.png` / `RmIG9x16_ChessTable_Courtyard_View2.png`
  — the carved chess set/table close up, courtyard visible through the
  glass doors behind it (yellow mid-century chairs, bonsai trees, stone
  walls)
- `RmIG_Lounge_CourtyardWide_View.png` — wide shot: green Eames lounge
  chairs in the foreground, glass doors open to the same courtyard
- `RmIG_Courtyard_Night_View.png` — night exterior view from the courtyard
  looking back in through the glass doors at the lounge (TV, green chairs)
- `RmIG9x16Yard_Monkey_CourtyardEntry.png` — courtyard entry view: bonsai
  trees, stone walls, glass doors open to reveal the lounge with the
  orange abstract painting and copper-topped bar visible inside
- `All_Power_To_The_People_Original.png` — the panther artwork itself,
  isolated (cream/red/navy pop-art panther roaring, "ALL POWER TO THE
  PEOPLE" lettering)

Common elements across all views: dark wood plank flooring, stone accent
walls, bonsai trees (indoor shelves and courtyard pots), a round
copper-rimmed glass coffee table with an ornate carved wooden chess set,
green/olive leather Eames-style lounge chairs, yellow mid-century chairs
in the courtyard, a wet bar with glass liquor shelving.

## Shot 05 / 06 Status
Shot 05 (lounge, monkey-painting angle) and shot 06 (courtyard angle)
image prompts and first-pass storyboard frames are done — see
`04-image-prompts/approved/shot04-shot05-shot06-image-prompts.md` and
`05-storyboard-frames/` once filed. The panther artwork wasn't included in
either prompt yet since it sits near the bar, not the monkey/chess-table
grouping used for shot 05 — flagged as an open question below.

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
1. Should the panther ("ALL POWER TO THE PEOPLE") artwork appear in shot
   05 or 06, or is it fine that it's only in the wider reference photos
   and not in either generated hero frame?
2. How many chairs in frame — the real photo shows one; default to one
   unless told otherwise.
