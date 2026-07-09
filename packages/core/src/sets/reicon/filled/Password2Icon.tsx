import type { IconProps } from "../../../shared/types";

export function Password2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M20.333 4a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1ZM8.013 9.977l-1.346.438V8.999a1 1 0 0 0-2 0v1.416L3.32 9.977a1 1 0 0 0-.617 1.902l1.345.437-.832 1.144a1 1 0 1 0 1.616 1.176l.832-1.145.832 1.145a.996.996 0 0 0 1.395.221 1 1 0 0 0 .221-1.397l-.832-1.144 1.345-.437a1 1 0 0 0 .642-1.26.994.994 0 0 0-1.259-.642Zm8.334 0L15 10.415V8.999a1 1 0 0 0-2 0v1.416l-1.347-.438a1 1 0 0 0-.617 1.901l1.345.438-.832 1.144a1 1 0 1 0 1.616 1.176l.832-1.145.832 1.145a.996.996 0 0 0 1.395.221 1 1 0 0 0 .221-1.397l-.832-1.144 1.346-.437a1 1 0 0 0 .641-1.26.995.995 0 0 0-1.259-.642Z"/>
    </svg>
  );
}
