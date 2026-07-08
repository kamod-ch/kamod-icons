import type { IconProps } from "../../../shared/types";

export function MapAltIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M7.534 2.488a2 2 0 0 1 1.94.025l5.796 3.312a.5.5 0 0 0 .485.006l4.784-2.576a1.5 1.5 0 0 1 2.211 1.32v12.21a2.25 2.25 0 0 1-1.183 1.98l-5.1 2.747a2 2 0 0 1-1.941-.025L8.73 18.175a.5.5 0 0 0-.485-.006L3.46 20.745a1.5 1.5 0 0 1-2.211-1.32V7.214a2.25 2.25 0 0 1 1.183-1.98zm-4.39 4.068 4.606-2.48v12.672a2 2 0 0 0-.216.1L2.75 19.424V7.216a.75.75 0 0 1 .394-.66Zm6.33 10.317a2 2 0 0 0-.224-.11V4.113l5.276 3.014q.11.063.224.11v12.65zm6.776 3.051 4.606-2.48a.75.75 0 0 0 .394-.66V4.576l-4.784 2.576q-.106.056-.216.1z" clipRule="evenodd"/>
    </svg>
  );
}
