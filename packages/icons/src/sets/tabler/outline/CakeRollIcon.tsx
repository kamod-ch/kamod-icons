import type { IconProps } from "../../../shared/types";

export function CakeRollIcon({
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
      <path d="M12 15c-4.97 0-9-2.462-9-5.5S7.03 4 12 4s9 2.462 9 5.5-4.03 5.5-9 5.5"/><path d="M12 6.97c3 0 4 1.036 4 1.979 0 2.805-8 2.969-8-.99C8 5.849 9.5 4 12 4"/><path d="M21 9.333v5.334C21 17.612 16.97 20 12 20s-9-2.388-9-5.333V9.333"/>
    </svg>
  );
}
