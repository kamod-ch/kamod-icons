import type { IconProps } from "../../../shared/types";

export function CircleCompose2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path fillRule="evenodd" d="M1.333 12C1.333 6.11 6.11 1.333 12 1.333c.38 0 .749.04 1.043.07a1 1 0 1 1-.194 1.99c-.331-.032-.588-.06-.849-.06A8.667 8.667 0 1 0 20.667 12c0-.261-.028-.517-.06-.85a1 1 0 1 1 1.99-.192c.03.293.07.662.07 1.042 0 5.89-4.776 10.667-10.667 10.667S1.333 17.89 1.333 12Z" clipRule="evenodd"/><path d="M21.75 2.25c-.965-.964-2.646-.964-3.61 0l-7.525 7.526c-.861.86-1.17 2.744-1.275 3.788a1.005 1.005 0 0 0 .995 1.1 1 1 0 0 0 .1-.004c1.045-.107 2.927-.412 3.79-1.275l7.526-7.527a2.56 2.56 0 0 0-.002-3.608Z"/></g>
    </svg>
  );
}
