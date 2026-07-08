import type { IconProps } from "../../../shared/types";

export function OrderedListIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M8.73 22H3.334a1 1 0 0 1-.997-1.07c.163-2.293 1.985-3.038 3.316-3.582.796-.324 2.123-.981 2.077-1.74-.05-.852-1.229-.936-1.588-.941-.742-.034-1.601.285-1.845 1.15a1 1 0 0 1-1.925-.54c.44-1.569 1.933-2.61 3.728-2.61h.072c2.028.029 3.457 1.164 3.556 2.821.09 1.528-1.027 2.777-3.319 3.712-.737.301-1.23.536-1.552.8h3.875a1 1 0 0 1 0 2ZM21.667 8h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2Zm0 10h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2ZM6.333 11a1 1 0 0 1-1-1V4.944a4.8 4.8 0 0 1-1.434.524 1.01 1.01 0 0 1-1.17-.795 1 1 0 0 1 .795-1.169c1.284-.245 1.919-1.293 1.945-1.337a1.01 1.01 0 0 1 1.127-.459c.435.119.739.51.739.96V10a1 1 0 0 1-1 1Z"/>
    </svg>
  );
}
