import type { IconProps } from "../../../shared/types";

export function MicrophoneSlashIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.333 7.667v-1a4.333 4.333 0 1 0-8.666 0v4a4.33 4.33 0 0 0 2.008 3.657m-2.863 2.864a8.32 8.32 0 0 1-3.145-6.521m16.666 0a8.333 8.333 0 0 1-9.583 8.24M12 19v2.667m-9.333-.334L21.333 2.667"/>
    </svg>
  );
}
