import type { IconProps } from "../../../shared/types";

export function NoteSquare2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.51 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-2v-6.99m1.31-.94 2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74c-.53-.18-.97-.78-.97-1.35v-.59c0-.77.59-1.19 1.31-.95"/>
    </svg>
  );
}
