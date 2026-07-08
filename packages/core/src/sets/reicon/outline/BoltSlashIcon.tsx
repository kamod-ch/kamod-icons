import type { IconProps } from "../../../shared/types";

export function BoltSlashIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.084 18.572-.165 2.779a.288.288 0 0 0 .518.19L19.934 10.2a.333.333 0 0 0-.036-.441m-5.565-.092h-1.668l.416-7.018a.288.288 0 0 0-.518-.19L4.066 13.8a.333.333 0 0 0 .267.533h5.334m-7 7L21.333 2.667"/>
    </svg>
  );
}
