import type { IconProps } from "../../../shared/types";

export function CardIcon({
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
      <path fill="currentColor" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4Zm-4 16h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20Z"/><path fill="currentColor" fillRule="evenodd" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
