import type { IconProps } from "../../shared/types";

export function PaletteIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-9-3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-2 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2"/>
    </svg>
  );
}
