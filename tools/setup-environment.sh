#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_NAME="my-first-video"

usage() {
  cat <<'EOF'
Usage: tools/setup-environment.sh [--project-name name]

Beginner setup for the storyboard video workflow.

Creates:
  projects/my-first-video/   a blank project for your own video

Examples:
  tools/setup-environment.sh
  tools/setup-environment.sh --project-name launch-video
EOF
}

while [ $# -gt 0 ]; do
  case "$1" in
    --project-name)
      PROJECT_NAME="${2:-}"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      usage
      exit 1
      ;;
  esac
  shift
done

if [ -z "$PROJECT_NAME" ]; then
  echo "Project name cannot be empty."
  exit 1
fi

PROJECT_TARGET="$ROOT_DIR/projects/$PROJECT_NAME"
if [ -e "$PROJECT_TARGET" ]; then
  echo "Project already exists: $PROJECT_TARGET"
else
  "$ROOT_DIR/tools/create-project.sh" "$PROJECT_NAME"
fi

cat > "$ROOT_DIR/projects/START_HERE_AFTER_SETUP.md" <<EOF
# Start Here After Setup

Your project is ready:

\`projects/$PROJECT_NAME/\`

Start here:

\`projects/$PROJECT_NAME/01-creative-brief/\`

Ask the user:

\`\`\`text
Do you want approval at every step, or should I use autopilot and only stop if something is risky or unclear?
\`\`\`

Read \`docs/workflow.md\` for the full step-by-step process, and
\`docs/approval-gates.md\` for how the attempts/approved/disapproved
folders work.

## Save progress to GitHub

When you want to upload project progress, run:

\`\`\`bash
tools/save-to-github.sh "Save storyboard project progress"
\`\`\`
EOF

echo
echo "Environment ready."
echo "Project: $PROJECT_TARGET"
echo "Setup guide: $ROOT_DIR/projects/START_HERE_AFTER_SETUP.md"
