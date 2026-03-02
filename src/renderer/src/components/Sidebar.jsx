export default function Sidebar({ repos, activeRepo, repoBranches, onSelectRepo, onRefresh, onAddWorkspace, onRemoveWorkspace, style }) {
  return (
    <aside className="sidebar" style={style}>
      <div className="sidebar__header">
        <span className="sidebar__title">Repos</span>
        <div style={{ display: 'flex', gap: 4 }}>
          <button className="refresh-btn" onClick={onRefresh} title="Refresh (⌘R)">⟳</button>
          <button className="refresh-btn" onClick={onAddWorkspace} title="Add workspace">+</button>
        </div>
      </div>

      <ul className="repo-list">
        {repos.map((repo, i) => {
          const isActive  = activeRepo?.path === repo.path
          const branchInfo = repoBranches[repo.path]
          return (
            <li
              key={repo.path}
              className={`repo-item${isActive ? ' repo-item--active' : ''}`}
              onClick={() => onSelectRepo(repo)}
              title={`${repo.path}\n⌘${i + 1}`}
            >
              <div className="repo-item__row">
                <span className="repo-item__name">{repo.name}</span>
                <button
                  className="repo-remove-btn"
                  title="Remove workspace"
                  onClick={e => { e.stopPropagation(); onRemoveWorkspace(repo.path) }}
                >
                  ×
                </button>
              </div>
              <div className="repo-item__meta">
                <span className="branch-name">{branchInfo?.branch || '—'}</span>
                {branchInfo?.ahead  > 0 && <span className="ahead">↑{branchInfo.ahead}</span>}
                {branchInfo?.behind > 0 && <span className="behind">↓{branchInfo.behind}</span>}
              </div>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
