export default function CommitPanel({
  message, onMessageChange, onCommit, onPush,
  busy, stagedCount, ahead, hasRemote,
}) {
  const canCommit = message.trim().length > 0 && stagedCount > 0 && !busy
  const canPush   = hasRemote && !busy

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && canCommit) onCommit()
  }

  return (
    <div className="commit-panel">
      <textarea
        className="commit-message"
        placeholder="Commit message (⌘↵ to commit)"
        value={message}
        onChange={e => onMessageChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={busy}
        rows={3}
      />
      <div className="commit-actions">
        <button className="btn btn--commit" onClick={onCommit} disabled={!canCommit}>
          {busy ? 'Working…' : `Commit${stagedCount > 0 ? ` (${stagedCount})` : ''}`}
        </button>
        <button className="btn btn--push" onClick={onPush} disabled={!canPush}>
          {busy ? '…' : `Push${ahead > 0 ? ` ↑${ahead}` : ''}`}
        </button>
      </div>
    </div>
  )
}
