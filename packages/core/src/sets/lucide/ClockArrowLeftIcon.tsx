import type { IconProps } from "../../shared/types";

export function ClockArrowLeftIcon({
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
      <path d="M12 6v6l1.5.8"/><path d="M12.338 21.994a10 10 0 1 1 9.587-8.767M14 18h8"/><path d="m18 22-4-4 4-4"/>
    </svg>
  );
}
