import type { IconProps } from "../../../shared/types";

export function FaceSmile2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12 1.333C6.119 1.333 1.333 6.12 1.333 12S6.12 22.667 12 22.667 22.667 17.88 22.667 12 17.88 1.333 12 1.333ZM6.667 12a1.334 1.334 0 1 1 2.667 0 1.334 1.334 0 0 1-2.667 0Zm9.178 4.213c-.841 1.328-2.278 2.12-3.845 2.12s-3.004-.793-3.845-2.12a1 1 0 0 1 1.689-1.07c.472.745 1.277 1.19 2.155 1.19s1.682-.445 2.154-1.19a1 1 0 1 1 1.69 1.07Zm.155-2.88a1.334 1.334 0 1 1 0-2.667 1.334 1.334 0 0 1 0 2.667Z"/>
    </svg>
  );
}
