import type { IconProps } from "../../../shared/types";

export function VoiceCheckIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3v16M8 8v6m12-5v4M4 9v4m12-7v9m-.5 4.5 2 2 5-5"/>
    </svg>
  );
}
