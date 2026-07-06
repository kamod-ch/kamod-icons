import { iconSources } from "@kamod/icons/meta";

function formatUpstreamPackage(set: (typeof iconSources)[keyof typeof iconSources]): string {
  const versionPackage = set.upstream.versionPackage;
  if (versionPackage && versionPackage !== set.upstream.package) {
    return `${set.upstream.package} (${versionPackage}@${set.upstream.version})`;
  }

  return `${set.upstream.package}@${set.upstream.version}`;
}

export default function IconSourcesTable() {
  const rows = Object.entries(iconSources).sort(([left], [right]) => left.localeCompare(right));

  return (
    <div class="ki-sources">
      <table class="ki-sources-table">
        <thead>
          <tr>
            <th>Set</th>
            <th>Upstream</th>
            <th>Version</th>
            <th>Icons</th>
            <th>Last sync</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([setName, set]) => (
            <tr key={setName}>
              <td>
                <code>@kamod/icons/{setName === "heroicons" || setName === "tabler" || setName === "iconoir" ? `${setName}/…` : setName}</code>
              </td>
              <td>
                <a href={set.upstream.repository} target="_blank" rel="noreferrer">
                  {set.label}
                </a>
                {set.upstream.note ? <p class="ki-sources-note">{set.upstream.note}</p> : null}
              </td>
              <td>
                <code>{formatUpstreamPackage(set)}</code>
              </td>
              <td>{set.iconCount.toLocaleString()}</td>
              <td>{set.syncedAt ?? "not synced yet"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
