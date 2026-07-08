import type { IconProps } from "../../../shared/types";

export function HashtagUp2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 22v-6l-2 2m2-2 2 2M9.95 6.26 8.9 15.73m4.21-9.47-1.05 9.47M6.53 9.42H16M6 12.58h9.47"/>
    </svg>
  );
}
