import type { IconProps } from "../../../shared/types";

export function VideoCut2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M13.138 2h-2.276a.5.5 0 0 0-.435.748L11.143 4H7.75v16h3.393l-.716 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.858 20h3.393V4h-3.393l.716-1.252A.5.5 0 0 0 13.138 2Zm-.28 18-.424-.74a.5.5 0 0 0-.868 0l-.423.74zm0-16-.424.74a.5.5 0 0 1-.868 0L11.143 4zm-.108 3.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM6.25 4.011c-1.705.036-2.696.193-3.371.868S2.047 6.545 2.01 8.25h4.24zM2 9.75v4.5h4.25v-4.5zm.879 9.371c-.675-.675-.832-1.666-.868-3.371H6.25v4.24c-1.705-.037-2.696-.194-3.371-.869ZM17.75 8.25V4.011c1.705.036 2.696.193 3.371.868s.832 1.666.868 3.371zM22 9.75h-4.25v4.5H22zm-4.25 6h4.239c-.036 1.705-.193 2.696-.868 3.371s-1.666.832-3.371.868z" clipRule="evenodd"/>
    </svg>
  );
}
