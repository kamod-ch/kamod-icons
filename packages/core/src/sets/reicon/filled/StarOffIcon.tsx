import type { IconProps } from "../../../shared/types";

export function StarOffIcon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l5.083 5.084-3.56.464C1.317 8.297.65 10.363 1.88 11.52l3.557 3.342a.25.25 0 0 1 .075.228l-.896 4.788c-.309 1.65 1.433 2.924 2.913 2.129l4.352-2.338a.25.25 0 0 1 .236 0l4.353 2.338c1.296.697 2.794-.195 2.937-1.537l2.061 2.061a.75.75 0 0 0 1.061-1.06l-3.666-3.666-.003-.003L8.676 7.616l-.002-.003zm7.669 1.412c.727-1.51 2.876-1.51 3.603 0l2.13 4.42a.25.25 0 0 0 .193.14l4.883.636c1.674.219 2.341 2.285 1.111 3.441l-3.42 3.213a.75.75 0 0 1-1.044-.016L9.151 6.212a.75.75 0 0 1-.145-.856z"/>
    </svg>
  );
}
