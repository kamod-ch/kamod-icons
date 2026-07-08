import type { IconProps } from "../../../shared/types";

export function EuroIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm5.553-.75a5.3 5.3 0 0 0 0 1.5H10a.75.75 0 0 1 0 1.5H7.255a5.25 5.25 0 0 0 7.37 2.298.75.75 0 1 1 .75 1.299 6.753 6.753 0 0 1-9.741-3.596H5a.75.75 0 0 1 0-1.501h.291a6.8 6.8 0 0 1 0-1.5H5a.75.75 0 0 1 0-1.5h.634a6.753 6.753 0 0 1 9.742-3.597.75.75 0 1 1-.751 1.299 5.25 5.25 0 0 0-7.37 2.298H10a.75.75 0 0 1 0 1.5z" clipRule="evenodd"/>
    </svg>
  );
}
