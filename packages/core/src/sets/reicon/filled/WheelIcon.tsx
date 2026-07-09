import type { IconProps } from "../../../shared/types";

export function WheelIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm5.954-9.25h-3.049a3 3 0 0 1-.803 1.39l1.524 2.64a6 6 0 0 0 2.328-4.03Zm-3.626 4.782-1.525-2.64a3 3 0 0 1-1.606 0l-1.525 2.64A6 6 0 0 0 12 18c.825 0 1.612-.167 2.328-.468Zm-5.954-.751 1.524-2.64a3 3 0 0 1-.804-1.391H6.046a6 6 0 0 0 2.328 4.03Zm9.58-5.531h-3.049a3 3 0 0 0-.803-1.39l1.524-2.64a6 6 0 0 1 2.328 4.03Zm-3.626-4.782A6 6 0 0 0 12 6c-.825 0-1.612.167-2.328.468l1.525 2.64a3 3 0 0 1 1.606 0zM9.898 9.86 8.374 7.22a6 6 0 0 0-2.328 4.03h3.049c.138-.535.42-1.013.803-1.39Z" clipRule="evenodd"/>
    </svg>
  );
}
