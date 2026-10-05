import type { IconProps } from "../../shared/types";

export function BunsenBurnerIcon({
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
      <path d="M4 21h16m-10 0v-9h4v9M12 8v4m2 5h5M12 3c1 2.5 3 3.5 3 5a3 3 0 1 1-6 0c0-2 1.5-2.5 1.5-3.5.5 1 1.5 1 1.5-1.5"/>
    </svg>
  );
}
