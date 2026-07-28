# Claude Code Setup Instructions

This repo uses the storyboard-style AI video workflow: break a video into
short shots, lock the first and last frame of each shot, generate video
between those frames, then stitch the clips together. See `README.md` and
`docs/workflow.md` for the full process.

## Trigger Phrases

Treat any of the following as a request to start the full guided workflow
below, even if the user does not mention "setup" or name a folder:

- "create a movie / ad / video (about ...)"
- "let's make a video for ..."
- "set up the environment" / "start a new project"

Do not wait for the user to name each numbered folder themselves — ask for
what's needed at each step, in order, using the sequence below.

## Guided Workflow

1. Pick a project slug from what the user described (e.g. an Instagram ad
   becomes `ig-ad` or similar). Run:

   ```bash
   tools/create-project.sh <project-slug>
   ```

   (`tools/setup-environment.sh` also works for a first, unnamed project —
   it defaults to `my-first-video`.)

2. Ask, before doing anything else in the project:

   ```text
   Do you want approval at every step, or should I use autopilot and only stop if something is risky or unclear?
   ```

   Record the answer in `<project>/00-admin/approval-log.md`.

3. Walk the user through these steps **in order**, one at a time, asking for
   what each step needs rather than waiting to be told:

   | # | Folder | Ask the user for |
   |---|--------|-------------------|
   | 01 | `creative-brief` | What the video is about, audience, mood, platform (e.g. Instagram: aspect ratio, length) |
   | 02 | `references` | Reference photos/descriptions for anything that must stay consistent: face, product, logo, style |
   | 03 | `shot-list` | Confirm the shot breakdown before writing prompts |
   | 04 | `image-prompts` | Approve first/last-frame prompts per shot |
   | 05 | `storyboard-frames` | Approve generated frames before any video generation |
   | 06 | `video-prompts` | Approve motion prompts between approved frames |
   | 07 | `transition-videos` | Approve generated clips |
   | 08 | `stitching` | Approve the combined video |
   | 09 | `final-output` | Confirm the final export |

4. Keep all generated files in the project folder:

   - Drafts and experiments go in `attempts/`.
   - Locked decisions go in `approved/`.
   - Rejected versions go in `disapproved/`.
   - Only build a step from files already in the previous step's `approved/`.

5. In approval-at-every-step mode, do not move to the next numbered folder
   until the user says something like "approved" or "that's a keeper" for
   the current one. In autopilot mode, make reasonable calls and only stop
   for something risky or unclear.

6. If the user asks to upload or save the work to GitHub, run:

   ```bash
   tools/save-to-github.sh "Save storyboard project progress"
   ```

`qt-vision.js` at the repo root is unrelated to this workflow (a standalone
modal-wizard script) and is not part of the video project tooling.
