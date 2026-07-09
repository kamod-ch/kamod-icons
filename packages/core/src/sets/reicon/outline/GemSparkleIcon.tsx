import type { IconProps } from "../../../shared/types";

export function GemSparkleIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.331 9c.017.3-.07.6-.263.857l-7.99 10.608a1.352 1.352 0 0 1-2.155 0L2.932 9.857a1.31 1.31 0 0 1 .093-1.693l3.206-3.408c.254-.27.61-.424.984-.424h6.278M2.737 9h18.594"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.507 4.333 8.076 9l3.61 11.964m1.807-16.631L15.924 9l-3.61 11.964"/><path fill="currentColor" strokeWidth="1.333" d="M2.333 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm19.013-.906L20 2.642l-.45-1.357c-.145-.438-.866-.438-1.012 0l-.45 1.357-1.345.452a.538.538 0 0 0 0 1.02l1.346.451.45 1.358a.533.533 0 0 0 1.01 0l.45-1.358 1.346-.451a.538.538 0 0 0 0-1.02z"/>
    </svg>
  );
}
