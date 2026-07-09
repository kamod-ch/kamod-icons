import type { IconProps } from "../../../shared/types";

export function Bandage2Icon({
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
      <path fill="currentColor" d="M9.879 11.293a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Zm2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415Zm0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Zm2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z"/><path fill="currentColor" fillRule="evenodd" d="M3.054 3.054a6.16 6.16 0 0 1 8.711 0l9.18 9.18a6.16 6.16 0 0 1-8.71 8.712l-9.18-9.18a6.16 6.16 0 0 1 0-8.712Zm7.078.573a4.66 4.66 0 0 0-6.505 6.505zm1.103 1.018-6.59 6.59 8.12 8.12 6.59-6.59zm9.138 9.223-6.505 6.505a4.66 4.66 0 0 0 6.505-6.505Z" clipRule="evenodd"/>
    </svg>
  );
}
