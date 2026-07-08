import type { IconProps } from "../../../shared/types";

export function CloudSnow2Icon({
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
      <path fill="currentColor" d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/><path fill="currentColor" d="M12 19a1 1 0 0 0 .781-.376.997.997 0 0 0-.182-1.425.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19Z"/><path fill="currentColor" d="M22 13.353c0 2.733-1.965 5.013-4.576 5.535A2.5 2.5 0 0 0 17 18a2.5 2.5 0 1 0-4.33-2.41 2.5 2.5 0 0 0-1.34 0A2.501 2.501 0 1 0 7 18c-.219.29-.375.63-.45 1h-.264C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353Z"/><path fill="currentColor" d="M15 17.5a1 1 0 0 1-.781-.376A1 1 0 1 1 15 17.5Zm-6-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
    </svg>
  );
}
