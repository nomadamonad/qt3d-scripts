# Claude Code Setup Instructions

This repo uses the storyboard-style AI video workflow: break a video into
short shots, lock the first and last frame of each shot, generate video
between those frames, then stitch the clips together. See `README.md` and
`docs/workflow.md` for the full process.

When a user asks to set this repo up or start a new video project, do this:

1. Run:

   ```bash
   tools/setup-environment.sh
   ```

2. Show the user:

   ```text
   projects/my-first-video/
   ```

3. Start the user at `projects/my-first-video/01-creative-brief/`.
4. Ask:

   ```text
   Do you want approval at every step, or should I use autopilot and only stop if something is risky or unclear?
   ```

5. Keep all generated files in the project folder:

   - Drafts and experiments go in `attempts/`.
   - Locked decisions go in `approved/`.
   - Rejected versions go in `disapproved/`.

6. To start an additional project, run:

   ```bash
   tools/create-project.sh <project-name>
   ```

7. If the user asks to upload or save the work to GitHub, run:

   ```bash
   tools/save-to-github.sh "Save storyboard project progress"
   ```

`qt-vision.js` at the repo root is unrelated to this workflow (a standalone
modal-wizard script) and is not part of the video project tooling.
