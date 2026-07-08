import type { IconProps } from "../../../shared/types";

export function ForkKnifeIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M17.724 2.581a.75.75 0 0 0-.948-1.162l-3.46 2.82q-.127.103-.246.214a4.584 4.584 0 0 0-.588 6.004L1.47 21.469a.75.75 0 0 0 1.06 1.061l11.013-11.012a4.584 4.584 0 0 0 6.218-.833l2.82-3.461a.75.75 0 0 0-1.162-.948L18.788 9.4a.515.515 0 1 1-.759-.695l2.558-2.564a.75.75 0 1 0-1.063-1.06L16.91 7.706a.428.428 0 0 1-.607-.605l2.618-2.625a.75.75 0 1 0-1.063-1.06l-2.55 2.559a.52.52 0 1 1-.703-.765z"/><path fill="currentColor" d="M1.25 3.761c0-1.318 1.594-1.978 2.526-1.046L10.53 9.47a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-.796-.796A13.4 13.4 0 0 1 1.25 3.761Zm12.22 9.709a.75.75 0 0 1 1.06 0l8 8a.75.75 0 0 1-1.06 1.06L15 16.06l-2.263 2.263a1.75 1.75 0 0 1-2.474 0l-.293-.293a.75.75 0 0 1 0-1.06z"/>
    </svg>
  );
}
