import type { IconProps } from "../../../shared/types";

export function EyeOpenIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><path d="m15.008 6.083.881-1.441a.75.75 0 0 0-1.279-.783l-.907 1.482a10.6 10.6 0 0 0-2.124-.769l.333-1.655a.75.75 0 0 0-1.47-.296l-.339 1.685a11 11 0 0 0-2.206 0l-.339-1.685a.75.75 0 1 0-1.47.296l.333 1.655q-1.106.272-2.124.769L3.39 3.859a.75.75 0 0 0-1.279.783l.881 1.441c-.594.402-1.154.867-1.668 1.392a.75.75 0 1 0 1.072 1.05c1.754-1.789 4.1-2.774 6.605-2.774s4.851.985 6.605 2.774a.747.747 0 0 0 1.061.011.75.75 0 0 0 .011-1.061 11 11 0 0 0-1.668-1.392Z"/><circle cx="9" cy="10.5" r="3.5"/></g>
    </svg>
  );
}
