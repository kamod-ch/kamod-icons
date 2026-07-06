import type { IconProps } from "../../../shared/types";

export function H3Icon({
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
      <path fillRule="evenodd" d="M12.749 3.743a.75.75 0 0 1 .75.75v15.002a.75.75 0 1 1-1.5 0v-6.75H2.997v6.75a.75.75 0 0 1-1.5 0V4.494a.75.75 0 1 1 1.5 0v6.75H12v-6.75a.75.75 0 0 1 .75-.75ZM18.75 10.5q-1.091.001-2.139.16a.75.75 0 1 1-.223-1.483 16 16 0 0 1 3.82-.11c.95.088 1.926.705 2.168 1.794a5.27 5.27 0 0 1-.579 3.765 5.27 5.27 0 0 1 .578 3.765c-.24 1.088-1.216 1.706-2.167 1.793a16 16 0 0 1-3.82-.109.75.75 0 0 1 .223-1.483 14.4 14.4 0 0 0 3.46.099c.467-.043.773-.322.84-.624a3.77 3.77 0 0 0-.413-2.691H18a.75.75 0 0 1 0-1.5h2.498a3.77 3.77 0 0 0 .413-2.69c-.067-.303-.373-.582-.84-.625a14 14 0 0 0-1.321-.06Z" clipRule="evenodd"/>
    </svg>
  );
}
