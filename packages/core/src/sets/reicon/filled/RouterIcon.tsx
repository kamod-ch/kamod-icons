import type { IconProps } from "../../../shared/types";

export function RouterIcon({
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
      <path fill="currentColor" d="M12.084 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.75 4.75 0 0 0-4.39-2.934Z"/><path fill="currentColor" d="M12.085 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.085 6Z"/><path fill="currentColor" d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/><path fill="currentColor" fillRule="evenodd" d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H6c-1.886 0-2.828 0-3.414.586S2 13.864 2 15.75s0 2.828.586 3.414 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414-1.528-.586-3.414-.586h-.136l3.787-6.628a.75.75 0 0 0-1.302-.744l-4 7-.22.372H7.88l-.23-.372zM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
    </svg>
  );
}
