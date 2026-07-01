import type { IconProps } from "../../../shared/types";

export function TiktokIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M16 21.75A5.75 5.75 0 0 0 21.75 16V8A5.75 5.75 0 0 0 16 2.25H8A5.75 5.75 0 0 0 2.25 8v8A5.75 5.75 0 0 0 8 21.75zM13.711 5.763A.75.75 0 0 0 12.25 6v9A2.25 2.25 0 1 1 10 12.75a.75.75 0 0 0 0-1.5A3.75 3.75 0 1 0 13.75 15V8.458c.767.712 1.847 1.292 3.25 1.292a.75.75 0 0 0 0-1.5c-.972 0-1.711-.4-2.259-.919-.56-.532-.898-1.173-1.03-1.568" clipRule="evenodd"/>
    </svg>
  );
}
