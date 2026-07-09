import type { IconProps } from "../../../shared/types";

export function PinOffIcon({
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
      <path fill="currentColor" d="M12 1.25c-1.857 0-3.58.58-4.997 1.566A.75.75 0 0 0 6.9 3.962l3.864 3.863a2.5 2.5 0 0 1 3.409 3.409l4.007 4.008a.75.75 0 0 0 1.187-.168c.798-1.447 1.382-3.136 1.382-5.074A8.75 8.75 0 0 0 12 1.25Zm10.53 21.28a.75.75 0 0 0 0-1.06l-20-20a.75.75 0 0 0-1.06 1.06l3.004 3.004A8.7 8.7 0 0 0 3.25 10c0 4.203 2.67 7.166 4.52 9.221l.172.19c.683.759 2.26 2.221 3.05 2.946a1.49 1.49 0 0 0 2.015 0c.79-.725 2.368-2.187 3.05-2.945l.121-.134c.298-.33.624-.692.958-1.082l4.334 4.334a.75.75 0 0 0 1.06 0Z"/>
    </svg>
  );
}
