import type { IconProps } from "../../../shared/types";

export function ArrowBigDownLinesIcon({
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
      <path d="m9 8-.117.007A1 1 0 0 0 8 9v1.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V9a1 1 0 0 0-1-1zm6-6a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2zm0 3a1 1 0 0 1 .117 1.993L15 7H9a1 1 0 0 1-.117-1.993L9 5z"/>
    </svg>
  );
}
