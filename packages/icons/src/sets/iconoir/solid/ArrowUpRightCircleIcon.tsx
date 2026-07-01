import type { IconProps } from "../../../shared/types";

export function ArrowUpRightCircleIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.879 8.421h4.95a.747.747 0 0 1 .75.75v4.95a.75.75 0 0 1-1.5 0v-3.139l-4.377 4.377a.75.75 0 1 1-1.06-1.061l4.376-4.377h-3.14a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
    </svg>
  );
}
