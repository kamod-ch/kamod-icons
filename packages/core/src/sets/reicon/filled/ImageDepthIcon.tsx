import type { IconProps } from "../../../shared/types";

export function ImageDepthIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M10.333 2.667c-.918 0-1.666.748-1.666 1.666S9.415 6 10.333 6 12 5.252 12 4.333s-.748-1.666-1.667-1.666ZM5.479 15.099l3.582-4.874-.786-1.065c-.762-1.03-2.455-1.03-3.216 0l-3.684 4.984a1.99 1.99 0 0 0-.178 2.09 1.99 1.99 0 0 0 1.786 1.098h1.664a4.3 4.3 0 0 1 .833-2.235ZM20.364 20H8.969c-.885 0-1.682-.49-2.082-1.28a2.32 2.32 0 0 1 .202-2.435l5.698-7.749c.888-1.208 2.87-1.208 3.76 0l5.697 7.75c.525.711.603 1.645.203 2.434S21.249 20 20.364 20ZM13.592 9.128Z"/>
    </svg>
  );
}
