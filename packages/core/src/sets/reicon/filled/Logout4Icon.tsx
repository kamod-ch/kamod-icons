import type { IconProps } from "../../../shared/types";

export function Logout4Icon({
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
      <path fill="currentColor" d="M5.911 3.038C6.361 3 6.943 3 7.8 3H11a1 1 0 1 0 0-2H7.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 5.29 2 5.954 2 6.758v10.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C6.29 23 6.954 23 7.758 23H11a1 1 0 1 0 0-2H7.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819C4 18.639 4 18.057 4 17.2V6.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 0 1 .874-.874c.156-.08.38-.145.819-.18Z"/><path fill="currentColor" d="M15.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-3.293-3.293a1 1 0 0 1 0-1.414Z"/>
    </svg>
  );
}
