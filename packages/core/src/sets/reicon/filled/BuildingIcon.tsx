import type { IconProps } from "../../../shared/types";

export function BuildingIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M15.632 1.25H8.368c-.743 0-1.346 0-1.835.04-.505.041-.954.129-1.372.341a3.5 3.5 0 0 0-1.53 1.53c-.212.418-.3.867-.341 1.372-.04.489-.04 1.092-.04 1.835V21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V6.368c0-.743 0-1.346-.04-1.835-.041-.505-.129-.954-.341-1.372a3.5 3.5 0 0 0-1.53-1.53c-.417-.212-.867-.3-1.372-.341-.489-.04-1.092-.04-1.835-.04Zm.118 5.25a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm0 3a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM15 13.25a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5zM10.75 9.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM10 7.25a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm.75 5.25a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm4 4v4.75h-5.5V16.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1Z" clipRule="evenodd"/>
    </svg>
  );
}
