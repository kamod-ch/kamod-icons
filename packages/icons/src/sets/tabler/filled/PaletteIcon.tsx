import type { IconProps } from "../../../shared/types";

export function PaletteIcon({
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
      <path d="M12 2c5.498 0 10 4.002 10 9 0 1.351-.6 2.64-1.654 3.576C19.316 15.49 17.934 16 16.5 16h-2.516a1 1 0 0 0-.5 1.875 1 1 0 0 1 .194.14 2.3 2.3 0 0 1-1.597 3.99l-.156-.009.068.004-.273-.004c-5.3-.146-9.57-4.416-9.716-9.716L2 12C2 6.477 6.477 2 12 2M8.5 8.5a2 2 0 0 0-1.995 1.85l-.005.15a2 2 0 1 0 2-2m8 0a2 2 0 0 0-1.995 1.85l-.005.15a2 2 0 1 0 2-2m-4-3a2 2 0 0 0-1.995 1.85l-.005.15a2 2 0 1 0 2-2"/>
    </svg>
  );
}
