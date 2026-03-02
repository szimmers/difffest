# Difffest

A macOS desktop app for reviewing and committing git changes across multiple repositories.

## Features

- **Multi-repo sidebar** — manage any number of repos; switch with ⌘1–4
- **Staged / Unstaged file lists** — stage, unstage, or bulk stage/unstage with one click
- **Diff viewer** — unified line-by-line diff with syntax highlighting (JSON supported)
- **Git blame** — toggle per-line authorship view
- **Commit & Push** — separate commit and push actions
- **Araxis Merge integration** — open any diff in Araxis for a full side-by-side view
- **Add to .gitignore** — right-click any unstaged file to ignore it
- **Auto-advance** — after staging a file, the next unstaged file is auto-selected
- **Resizable columns** — drag dividers between sidebar, file list, and diff pane
- **Live updates** — file watcher auto-refreshes status when the git index changes

## Tech Stack

- [Electron](https://electronjs.org) — desktop shell
- [React 18](https://react.dev) — renderer UI
- [electron-vite](https://electron-vite.github.io) — build tooling
- [simple-git](https://github.com/steveukx/git-js) — git operations
- [diff2html](https://diff2html.xyz) — diff rendering
- [highlight.js](https://highlightjs.org) — syntax highlighting
- [chokidar](https://github.com/paulmillr/chokidar) — file watching

## Prerequisites

- Node.js 18+
- macOS (uses `hiddenInset` titlebar; Araxis Merge optional)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| ⌘1–9 | Switch to repo 1–9 |
| ⌘R | Refresh active repo status |
| ⌘↵ | Commit staged changes |

## Workspace Storage

Repositories are persisted to:

```
~/Library/Application Support/difffest/workspaces.json
```
