import type { IconProps } from "../../../shared/types";

export function Candle22Icon({
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
      <path fill="currentColor" d="M22.75 17.5c0 .41-.34.75-.75.75h-7v.25c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3v-.25c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h7c.41 0 .75.34.75.75Zm0-11c0 .41-.34.75-.75.75h-3v.25c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7V5.5c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h3c.41 0 .75.34.75.75Z"/>
    </svg>
  );
}
