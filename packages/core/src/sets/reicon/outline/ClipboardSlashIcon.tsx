import type { IconProps } from "../../../shared/types";

export function ClipboardSlashIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.43 5.236A2.67 2.67 0 0 0 17 3.666h-1.333M8.656 21.667H17A2.666 2.666 0 0 0 19.667 19v-8.344M8.333 3.667H7a2.666 2.666 0 0 0-2.667 2.666V19c0 .39.084.763.236 1.097m9.764-18.43H9.667c-.737 0-1.334.597-1.334 1.333v1.333c0 .736.597 1.334 1.334 1.334h4.666c.737 0 1.334-.598 1.334-1.334V3c0-.736-.597-1.333-1.334-1.333M3 21.667 21.333 3.333"/>
    </svg>
  );
}
