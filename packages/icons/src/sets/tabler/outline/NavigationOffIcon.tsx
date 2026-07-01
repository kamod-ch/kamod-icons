import type { IconProps } from "../../../shared/types";

export function NavigationOffIcon({
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
      <path d="M16.28 12.28Q14.855 9.184 12 3l-1.573 3.41m-1.27 2.75Q7.835 12.03 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l7.265 2.463c.196.077.42.032.57-.116a.55.55 0 0 0 .134-.572l-.26-.563M3 3l18 18"/>
    </svg>
  );
}
