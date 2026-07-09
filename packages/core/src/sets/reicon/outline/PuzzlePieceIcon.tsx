import type { IconProps } from "../../../shared/types";

export function PuzzlePieceIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.667 11c.496 0 .954.157 1.333.423v-3.09a2.667 2.667 0 0 0-2.667-2.666h-3.089c.264-.379.423-.836.423-1.334a2.333 2.333 0 1 0-4.667 0c0 .498.157.955.423 1.334h-3.09a2.667 2.667 0 0 0-2.666 2.666v3.09A2.33 2.33 0 0 0 4.333 11a2.333 2.333 0 1 0 0 4.667 2.3 2.3 0 0 0 1.334-.423v3.09A2.667 2.667 0 0 0 8.333 21h3.09A2.3 2.3 0 0 1 11 19.667a2.333 2.333 0 1 1 4.667 0c0 .497-.158.954-.423 1.333h3.09A2.667 2.667 0 0 0 21 18.333v-3.089a2.33 2.33 0 0 1-1.333.423 2.333 2.333 0 1 1 0-4.667"/>
    </svg>
  );
}
