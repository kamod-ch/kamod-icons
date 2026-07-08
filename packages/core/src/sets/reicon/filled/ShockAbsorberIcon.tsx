import type { IconProps } from "../../../shared/types";

export function ShockAbsorberIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14 20a2 2 0 1 1-3.323-1.5h-.427a1.75 1.75 0 0 1-1-3.186V6H8c-.943 0-1.414 0-1.707-.293S6 4.943 6 4s0-1.414.293-1.707S7.057 2 8 2h8c.943 0 1.414 0 1.707.293S18 3.057 18 4s0 1.414-.293 1.707S16.943 6 16 6h-1.25v9.314a1.75 1.75 0 0 1-1 3.186h-.427c.415.366.677.903.677 1.5Zm-.75-14h-2.5v9h2.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.273 7.818a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91Zm0 3.5a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91Zm13.038-3.846a.75.75 0 0 1-.005 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm-16.622 0a.75.75 0 0 1 1.06-.005l.707.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.005-1.06ZM22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5Zm-20.75-.748a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm4.212 2.271a.75.75 0 0 1-.006 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm13.076 0a.75.75 0 0 1 1.06-.005l.708.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.006-1.06Z" clipRule="evenodd"/>
    </svg>
  );
}
