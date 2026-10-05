import type { IconProps } from "../../shared/types";

export function PromptCompressIcon({
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
      <path d="M6 10h12M6 14h12M9.5 3 12 5.5 14.5 3m-5 18 2.5-2.5 2.5 2.5"/>
    </svg>
  );
}
