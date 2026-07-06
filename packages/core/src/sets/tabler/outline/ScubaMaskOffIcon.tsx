import type { IconProps } from "../../../shared/types";

export function ScubaMaskOffIcon({
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
      <path d="M11 7h5a1 1 0 0 1 1 1v4.5q0 .231-.04.45m-2 2.007q-.226.042-.463.043h-.5a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5a2.5 2.5 0 0 1-2.5-2.5V8a1 1 0 0 1 1-1h3M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 2.765-.744m2-2c.47-.81.739-1.752.739-2.756V4M3 3l18 18"/>
    </svg>
  );
}
