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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l3.004 3.004A8.7 8.7 0 0 0 3.25 10c0 3.795 2.278 6.73 4.692 9.412.683.758 2.26 2.22 3.05 2.945a1.49 1.49 0 0 0 2.015 0c.79-.725 2.368-2.187 3.05-2.945.363-.403.726-.805 1.079-1.216l4.334 4.334a.75.75 0 1 0 1.06-1.06l-4.907-4.908-.013-.013L5.972 4.911l-.019-.018zm3.046 5.166A7.2 7.2 0 0 0 4.75 10c0 3.588 2.283 6.16 4.185 8.273l.122.135c.622.69 2.13 2.092 2.943 2.837.813-.745 2.321-2.146 2.943-2.837l.116-.13c.324-.36.667-.74 1.013-1.146z" clipRule="evenodd"/><path fill="currentColor" d="M7.86 4.047A7.25 7.25 0 0 1 19.25 10c0 1.625-.487 3.066-1.195 4.35a.75.75 0 1 0 1.313.724c.798-1.447 1.382-3.136 1.382-5.074A8.75 8.75 0 0 0 7.003 2.816a.75.75 0 1 0 .858 1.231Z"/><path fill="currentColor" d="M11.679 8.28q.156-.03.322-.03a1.75 1.75 0 0 1 1.72 2.072.75.75 0 1 0 1.475.274 3.25 3.25 0 0 0-3.791-3.791.75.75 0 0 0 .274 1.474Z"/>
    </svg>
  );
}
