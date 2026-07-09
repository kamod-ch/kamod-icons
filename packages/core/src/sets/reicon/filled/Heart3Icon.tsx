import type { IconProps } from "../../../shared/types";

export function Heart3Icon({
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
      <path fill="currentColor" d="M7.893 2.5C4.027 2.5 1.5 5.79 1.5 9.474c0 3.722 2.249 6.729 4.604 8.833 2.357 2.105 4.915 3.393 5.738 3.667l.158.053.158-.053c.823-.274 3.381-1.562 5.738-3.667 2.355-2.104 4.604-5.11 4.604-8.833 0-3.683-2.527-6.974-6.393-6.974-1.908 0-3.249.893-4.107 1.76-.858-.867-2.199-1.76-4.107-1.76Z"/>
    </svg>
  );
}
