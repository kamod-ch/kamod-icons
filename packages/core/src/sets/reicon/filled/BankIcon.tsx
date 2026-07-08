import type { IconProps } from "../../../shared/types";

export function BankIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M10.216 1.784a3.25 3.25 0 0 1 3.568 0l8.062 5.294c1.66 1.09.889 3.672-1.097 3.672H3.25c-1.986 0-2.758-2.582-1.098-3.672zM12.75 6a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/><path fill="currentColor" d="M18.75 12.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM15 13a.75.75 0 1 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-5.25-.75a.75.75 0 0 1 .75.75v3A.75.75 0 0 1 9 16v-3a.75.75 0 0 1 .75-.75ZM6 13a.75.75 0 1 0-1.5 0v3A.75.75 0 0 0 6 16zm-3.25 6a.75.75 0 0 1 .75-.75h17a.75.75 0 1 1 0 1.5h-17a.75.75 0 0 1-.75-.75ZM2 21.25a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
}
