import type { IconProps } from "../../../shared/types";

export function BellOff2Icon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l3.62 3.62a7.3 7.3 0 0 0-.38 1.757l-.178 1.957a11.4 11.4 0 0 1-1.865 5.283l-.033.05a2.285 2.285 0 0 0 1.901 3.553H17.69l3.78 3.78a.75.75 0 1 0 1.061-1.06l-4-4zM12 1.25c-1.85 0-3.553.69-4.849 1.836a.75.75 0 0 0-.033 1.092l13.28 13.281a.75.75 0 0 0 1.246-.304 2.29 2.29 0 0 0-.278-1.958l-.033-.05a11.4 11.4 0 0 1-1.865-5.283l-.178-1.957A7.32 7.32 0 0 0 12 1.25Z"/><path fill="currentColor" d="M9.026 19.85a.75.75 0 0 1 1.025.274 2.249 2.249 0 0 0 3.899 0 .75.75 0 0 1 1.298.751 3.749 3.749 0 0 1-6.496 0 .75.75 0 0 1 .274-1.024Z"/>
    </svg>
  );
}
