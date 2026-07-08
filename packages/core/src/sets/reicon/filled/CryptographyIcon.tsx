import type { IconProps } from "../../../shared/types";

export function CryptographyIcon({
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
      <g fill="currentColor" fillRule="evenodd" strokeWidth="1.333" clipRule="evenodd"><path d="M21 7.272a1 1 0 0 1 1 1v6.904c0 .618-.246 1.212-.683 1.65l-4.491 4.49a2.33 2.33 0 0 1-1.65.684H8.272a1 1 0 0 1 0-2h6.904a.33.33 0 0 0 .235-.098l4.491-4.49a.33.33 0 0 0 .098-.236V8.272a1 1 0 0 1 1-1ZM7.174 2.683A2.33 2.33 0 0 1 8.824 2h6.904a1 1 0 0 1 0 2H8.824a.33.33 0 0 0-.235.098l-4.492 4.49A.33.33 0 0 0 4 8.825v6.904a1 1 0 0 1-2 0V8.824c0-.618.246-1.212.683-1.65z"/><path d="M11.245 5.448a2.667 2.667 0 0 0-2.518 3.548L6.75 10.87A2.33 2.33 0 0 0 6 12.583v3.569q0 .107-.06.192l-1.703 2.01a1 1 0 1 0 1.526 1.292l1.723-2.033.028-.036A2.33 2.33 0 0 0 8 16.152v-3.57a.33.33 0 0 1 .106-.243l1.943-1.84a2.667 2.667 0 1 0 1.196-5.05Zm8.518.198a1 1 0 1 0-1.526-1.292l-1.723 2.033q-.015.017-.029.036c-.315.409-.485.91-.485 1.425v3.57a.33.33 0 0 1-.106.243l-.002.001-1.95 1.842a2.667 2.667 0 1 0 1.343 1.483l1.966-1.857A2.33 2.33 0 0 0 18 11.417V7.848q0-.107.06-.192z"/></g>
    </svg>
  );
}
