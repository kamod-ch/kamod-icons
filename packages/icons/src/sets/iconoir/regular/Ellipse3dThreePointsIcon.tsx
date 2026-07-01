import type { IconProps } from "../../../shared/types";

export function Ellipse3dThreePointsIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 22h8m-8 0V2"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" d="M8 4.193C9.37 2.821 11.108 2 13 2c4.418 0 8 4.477 8 10 0 3.271-1.256 6.176-3.2 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.2 20A9 9 0 0 1 7 18.615"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}
