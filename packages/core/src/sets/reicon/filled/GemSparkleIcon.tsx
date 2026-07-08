import type { IconProps } from "../../../shared/types";

export function GemSparkleIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M21.346 3.094 20 2.642l-.45-1.357c-.145-.438-.866-.438-1.012 0l-.45 1.357-1.345.452a.538.538 0 0 0 0 1.02l1.346.452.45 1.357a.533.533 0 0 0 1.01 0l.45-1.357 1.346-.452a.538.538 0 0 0 .001-1.02ZM2.333 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path fillRule="evenodd" d="M7.215 3.333c-.647 0-1.271.27-1.714.739L2.297 7.48a2.31 2.31 0 0 0-.164 2.979l7.991 10.608c.447.593 1.13.933 1.876.933.745 0 1.43-.34 1.876-.933l7.99-10.608c.33-.437.483-.956.466-1.469a1 1 0 0 0-1-.99H16.53l-2.15-4.129a1 1 0 0 0-.888-.538zm4.784 15.207L14.577 10H9.42zM7.213 5.333c-.097 0-.19.04-.256.11L4.553 8h2.915l1.39-2.667z" clipRule="evenodd"/></g>
    </svg>
  );
}
