import type { IconProps } from "../../../shared/types";

export function HelpIcon({
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
      <path d="M17 3.34A10 10 0 1 1 7 20.66 10 10 0 0 1 17 3.34M12 16a1 1 0 0 0-.993.883L11 17.01a1 1 0 0 0 1.993.117L13 17a1 1 0 0 0-1-1m1.173-9.856a3.6 3.6 0 0 0-3.97 1.252A1 1 0 0 0 10.715 8.7l.082-.096a1.6 1.6 0 1 1 1.846 2.462 2.49 2.49 0 0 0-1.641 2.49 1 1 0 0 0 1.996.004v-.117a.5.5 0 0 1 .259-.466l.075-.034a3.61 3.61 0 0 0 2.338-3.47 3.6 3.6 0 0 0-2.497-3.329"/>
    </svg>
  );
}
