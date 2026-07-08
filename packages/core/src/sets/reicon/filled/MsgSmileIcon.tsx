import type { IconProps } from "../../../shared/types";

export function MsgSmileIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12 1.333C6.119 1.333 1.333 6.12 1.333 12c0 1.863.495 3.704 1.416 5.295.318.594-.126 2.669-1.122 3.665a1 1 0 0 0 .652 1.705q.158.009.322.008c1.527 0 3.379-.542 4.587-1.161A10.6 10.6 0 0 0 12 22.665c5.881 0 10.667-4.785 10.667-10.666S17.88 1.333 12 1.333Zm4.705 15.384c-1.258 1.258-2.93 1.95-4.705 1.95s-3.457-.696-4.719-1.96a1.003 1.003 0 0 1 0-1.415 1.003 1.003 0 0 1 1.416 0c1.763 1.768 4.828 1.77 6.596.008a1 1 0 1 1 1.412 1.415Z"/>
    </svg>
  );
}
