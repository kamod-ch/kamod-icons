import type { IconProps } from "../../../shared/types";

export function MobileOffIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.232 1.25H9.768c-.813 0-1.469 0-2 .043-.546.045-1.026.14-1.47.366q-.129.065-.25.139a.75.75 0 0 0-.14 1.17L18.47 15.53a.75.75 0 0 0 1.28-.53V6.768c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365-.531-.043-1.187-.043-2-.043ZM9.75 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 9.75 5ZM2.53 1.47a.75.75 0 0 0-1.06 1.06l2.793 2.794c-.013.416-.013.898-.013 1.455v10.453c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h4.464c.813 0 1.469 0 2-.043.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.734-1.844l2.034 2.033a.75.75 0 1 0 1.06-1.06zM11 18.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
    </svg>
  );
}
