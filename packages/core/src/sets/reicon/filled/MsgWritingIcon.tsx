import type { IconProps } from "../../../shared/types";

export function MsgWritingIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12 1.333C6.119 1.333 1.333 6.12 1.333 12c0 1.861.495 3.701 1.416 5.295.318.594-.126 2.669-1.122 3.665a1 1 0 0 0 .653 1.705q.158.009.321.008c1.527 0 3.38-.542 4.587-1.161A10.6 10.6 0 0 0 12 22.667c5.881 0 10.667-4.786 10.667-10.667S17.88 1.333 12 1.333Zm-4.667 12A1.334 1.334 0 0 1 6 12a1.334 1.334 0 0 1 2.667 0c0 .735-.598 1.333-1.334 1.333Zm4.667 0A1.334 1.334 0 0 1 10.667 12a1.334 1.334 0 0 1 2.666 0c0 .735-.597 1.333-1.333 1.333Zm4.667 0A1.335 1.335 0 0 1 15.333 12 1.334 1.334 0 0 1 18 12c0 .735-.597 1.333-1.333 1.333Z"/>
    </svg>
  );
}
