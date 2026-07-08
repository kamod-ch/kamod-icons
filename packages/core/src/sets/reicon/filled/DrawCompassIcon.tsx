import type { IconProps } from "../../../shared/types";

export function DrawCompassIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="m17.336 14.057-2.943-5.414c.579-.6.94-1.412.94-2.31A3.32 3.32 0 0 0 13 3.171V2a1 1 0 0 0-2 0v1.17c-1.348.43-2.333 1.678-2.333 3.164 0 .898.36 1.711.94 2.311L2.788 21.189a1 1 0 1 0 1.757.955l6.816-12.541c.207.04.42.064.639.064q.328-.002.637-.064l2.942 5.41a1.001 1.001 0 0 0 1.757-.956Z"/><path d="M12 16.667c-2.8 0-5.421-1.102-7.381-3.103a1 1 0 1 1 1.429-1.4 8.27 8.27 0 0 0 5.953 2.501 8.28 8.28 0 0 0 5.954-2.501 1 1 0 1 1 1.429 1.4c-1.96 2-4.584 3.103-7.384 3.103Z"/><path fillRule="evenodd" d="M17.893 17.175a1 1 0 0 1 1.356.401l1.963 3.613a1 1 0 1 1-1.757.955l-1.963-3.613a1 1 0 0 1 .4-1.356Z" clipRule="evenodd"/></g>
    </svg>
  );
}
