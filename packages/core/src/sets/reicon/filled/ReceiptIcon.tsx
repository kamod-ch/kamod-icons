import type { IconProps } from "../../../shared/types";

export function ReceiptIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M7.69 1.872a2.42 2.42 0 0 1 3.405.158l.108.117c.43.466 1.165.466 1.594 0l.108-.117a2.42 2.42 0 0 1 3.405-.158l.825.744a.714.714 0 0 0 .987-.028C19.178 1.518 21 2.266 21 3.77v16.47c0 1.504-1.822 2.252-2.878 1.183a.714.714 0 0 0-.987-.029l-.815.735a2.413 2.413 0 0 1-3.414-.182l-.107-.12a1.073 1.073 0 0 0-1.598 0l-.107.12a2.413 2.413 0 0 1-3.414.182l-.815-.735a.714.714 0 0 0-.987.029C4.822 22.493 3 21.744 3 20.24V3.77c0-1.504 1.822-2.252 2.878-1.182a.714.714 0 0 0 .987.028zM14 9.25a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm2.75 2.749a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75Zm-1 3.498a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z" clipRule="evenodd"/>
    </svg>
  );
}
