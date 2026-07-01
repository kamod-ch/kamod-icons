import type { IconProps } from "../../../shared/types";

export function WifiWarningIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.756 6.94c3.192-2.444 6.612-3.69 10.243-3.69s7.051 1.246 10.244 3.69l.014.01.013.011c.552.465.653 1.282.175 1.847L12.99 19.981a1.296 1.296 0 0 1-1.981 0L1.543 8.795l-.011-.014c-.44-.572-.364-1.392.224-1.842M12 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m.568 7.25a.75.75 0 0 0-1.115-1.003l-.01.011a.75.75 0 0 0 1.114 1.004z" clipRule="evenodd"/>
    </svg>
  );
}
