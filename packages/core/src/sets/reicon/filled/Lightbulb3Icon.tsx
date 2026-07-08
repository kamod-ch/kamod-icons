import type { IconProps } from "../../../shared/types";

export function Lightbulb3Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M12 3.333a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v1.333a1 1 0 0 1-1 1Zm6.835 2.832a1 1 0 0 1-.707-1.708l.943-.942a1 1 0 1 1 1.414 1.414l-.942.943a1 1 0 0 1-.708.293ZM23 13h-1.333a1 1 0 0 1 0-2H23a1 1 0 0 1 0 2ZM5.165 6.165a1 1 0 0 1-.706-.293l-.943-.943a1 1 0 1 1 1.415-1.414l.942.942a1 1 0 0 1-.708 1.708ZM2.333 13H1a1 1 0 0 1 0-2h1.333a1 1 0 0 1 0 2Z"/><path fillRule="evenodd" d="M19.333 12a7.34 7.34 0 0 0-8.91-7.168c-2.905.61-5.183 3.027-5.657 5.948-.544 3.35 1.197 6.357 3.9 7.74v1.813a3 3 0 0 0 3 3h.667a3 3 0 0 0 3-3V18.52a7.32 7.32 0 0 0 4-6.52Zm-8.498-5.21A5.34 5.34 0 0 1 17.333 12c0 2.012-1.12 3.76-2.774 4.667H9.44a5.32 5.32 0 0 1-2.7-5.567c.343-2.114 2.008-3.873 4.095-4.31Z" clipRule="evenodd"/></g>
    </svg>
  );
}
