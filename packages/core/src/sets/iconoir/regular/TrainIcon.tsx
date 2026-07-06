import type { IconProps } from "../../../shared/types";

export function TrainIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.609 7h4.782A2.61 2.61 0 0 1 17 9.609a.39.39 0 0 1-.391.391H7.39A.39.39 0 0 1 7 9.609 2.61 2.61 0 0 1 9.609 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 3h6a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6m7 12.01.01-.011M8 15.01l.01-.011"/><path stroke="currentColor" strokeLinecap="round" d="m10.5 19-2 2.5m5-2.5 2 2.5m1-2.5 2 2.5M7.5 19l-2 2.5"/>
    </svg>
  );
}
