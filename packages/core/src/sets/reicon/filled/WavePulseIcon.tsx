import type { IconProps } from "../../../shared/types";

export function WavePulseIcon({
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
      <path fill="currentColor" d="M23 12.501a1 1 0 0 1-1 1h-3.764c-.018 0-.075.031-.105.09l-1.221 2.317a1.55 1.55 0 0 1-1.574.815 1.54 1.54 0 0 1-1.318-1.17L12.131 7.69l-2.027 11.048A1.54 1.54 0 0 1 8.632 20l-.061.001c-.71 0-1.323-.466-1.504-1.152l-1.376-5.248c-.016-.06-.055-.1-.074-.1H2a1 1 0 0 1 0-2h3.615c.937 0 1.763.654 2.009 1.592l.872 3.322 2.046-11.15A1.54 1.54 0 0 1 12.028 4a1.534 1.534 0 0 1 1.558 1.182l2.101 8.755.674-1.28c.37-.703 1.106-1.157 1.875-1.157H22a1 1 0 0 1 1 1Z"/>
    </svg>
  );
}
