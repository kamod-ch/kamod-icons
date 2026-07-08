import type { IconProps } from "../../../shared/types";

export function HeadsetIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17.333 17.667-.456 1.929a2.666 2.666 0 0 1-2.598 2.07h-2.612"/><path d="m5 9.804-1.497.756a2.67 2.67 0 0 0-1.404 2.945l.446 2.06a2.666 2.666 0 0 0 2.607 2.102h1.516L5.223 11A7 7 0 0 1 5 9.333a7 7 0 0 1 14 0c0 .578-.089 1.13-.221 1.667l-1.445 6.667h1.516c1.254 0 2.34-.875 2.606-2.102l.447-2.06A2.666 2.666 0 0 0 20.5 10.56l-1.497-.756"/></g>
    </svg>
  );
}
