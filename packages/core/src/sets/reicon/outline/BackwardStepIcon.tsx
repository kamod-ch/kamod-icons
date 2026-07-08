import type { IconProps } from "../../../shared/types";

export function BackwardStepIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.044 5.18c1.556-1.104 3.71.009 3.71 1.917v9.796c0 1.908-2.154 3.02-3.71 1.917l-6.732-4.776-.062-.045v4.51a.75.75 0 0 1-1.5 0v-13a.75.75 0 1 1 1.5 0v4.502l.062-.045zm2.21 1.917a.85.85 0 0 0-1.342-.693L8.18 11.179a1 1 0 0 0 0 1.632l6.732 4.776a.85.85 0 0 0 1.342-.694z" clipRule="evenodd"/>
    </svg>
  );
}
