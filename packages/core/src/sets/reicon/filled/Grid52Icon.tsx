import type { IconProps } from "../../../shared/types";

export function Grid52Icon({
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
      <path fill="currentColor" d="M8.25 2v20h-.44C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2zM22 7.81v3.44H9.75V2h6.44C19.83 2 22 4.17 22 7.81Zm0 4.94v3.44c0 3.64-2.17 5.81-5.81 5.81H9.75v-9.25z"/>
    </svg>
  );
}
