import type { IconProps } from "../../../shared/types";

export function HashtagCircleIcon({
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
      <path fill="currentColor" d="m14.092 10.75-.75 2.5H9.908l.75-2.5z"/><path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.784 4.282a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503Z" clipRule="evenodd"/>
    </svg>
  );
}
