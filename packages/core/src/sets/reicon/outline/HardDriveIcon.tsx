import type { IconProps } from "../../../shared/types";

export function HardDriveIcon({
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
      <path fill="currentColor" d="M17 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/><path fill="currentColor" fillRule="evenodd" d="M9.474 2.25c-1.328 0-2.208 0-2.972.306A4.25 4.25 0 0 0 4.78 3.827c-.518.64-.777 1.481-1.167 2.751l-2.54 8.258a6.3 6.3 0 0 0-.32 1.796c-.004.097-.004.194-.004.355V17a4.75 4.75 0 0 0 4.75 4.75h13A4.75 4.75 0 0 0 23.25 17v-.013c0-.16 0-.258-.003-.355a6.3 6.3 0 0 0-.219-1.456 12 12 0 0 0-.101-.34l-2.541-8.258c-.39-1.27-.649-2.11-1.167-2.751a4.25 4.25 0 0 0-1.72-1.271c-.765-.307-1.645-.307-2.973-.306zm11.259 10.556L19 7.174c-.456-1.482-.635-2.018-.947-2.404a2.75 2.75 0 0 0-1.114-.822c-.46-.185-1.025-.198-2.575-.198H9.636c-1.55 0-2.115.013-2.575.198a2.75 2.75 0 0 0-1.114.822c-.312.386-.49.922-.947 2.404l-1.733 5.632A4.7 4.7 0 0 1 5.5 12.25h13c.807 0 1.567.201 2.233.556ZM2.25 17a3.25 3.25 0 0 1 3.25-3.25h13a3.25 3.25 0 1 1 0 6.5h-13A3.25 3.25 0 0 1 2.25 17Z" clipRule="evenodd"/>
    </svg>
  );
}
