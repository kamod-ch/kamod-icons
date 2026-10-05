import type { IconProps } from "../../shared/types";

export function BookOpenIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 7Q9 4 3 4v14q6 0 9 3m0-14q3-3 9-3v14q-6 0-9 3m0-14v14"/>
    </svg>
  );
}
