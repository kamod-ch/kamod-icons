import type { IconProps } from "../../../shared/types";

export function MicrophoneMuteIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8.25 4.384a3.134 3.134 0 0 1 3.134-3.134H12A3.75 3.75 0 0 1 15.75 5v5.5a.75.75 0 0 1-1.23.576L9.378 6.791A3.13 3.13 0 0 1 8.25 4.384M14 14.75A5.75 5.75 0 0 1 8.25 9h1.5A4.25 4.25 0 0 0 14 13.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M5 9.25a.75.75 0 0 1 .75.75v1a6.25 6.25 0 1 0 12.5 0v-1a.75.75 0 0 1 1.5 0v1a7.75 7.75 0 0 1-15.5 0v-1A.75.75 0 0 1 5 9.25" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 17.25a.75.75 0 0 1 .75.75v3.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V18a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
    </svg>
  );
}
