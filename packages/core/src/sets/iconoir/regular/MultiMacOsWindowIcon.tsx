import type { IconProps } from "../../../shared/types";

export function MultiMacOsWindowIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M7 19v-8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 12.01.01-.011m1.99.011.01-.011m1.99.011.01-.011"/><path stroke="currentColor" strokeWidth="1.5" d="M6.5 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5 7.01.01-.011M7 7.01l.01-.011M9 7.01l.01-.011"/>
    </svg>
  );
}
