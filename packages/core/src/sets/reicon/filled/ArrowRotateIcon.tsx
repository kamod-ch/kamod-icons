import type { IconProps } from "../../../shared/types";

export function ArrowRotateIcon({
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
      <path fill="currentColor" d="M17.4 4.799A8.96 8.96 0 0 0 12 3a9 9 0 1 0 0 18 9 9 0 0 0 8.588-6.3 1 1 0 1 1 1.908.6C21.095 19.762 16.926 23 12 23 5.925 23 1 18.075 1 12S5.925 1 12 1c2.475 0 4.762.819 6.6 2.2.765.574 1.567 1.382 2.239 2.157l.161.188V2.5a1 1 0 1 1 2 0V8a1 1 0 0 1-1 1h-5.5a1 1 0 1 1 0-2h3.109a18 18 0 0 0-.282-.334c-.621-.717-1.32-1.41-1.928-1.867Z"/>
    </svg>
  );
}
