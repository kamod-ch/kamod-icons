import type { IconProps } from "../../../shared/types";

export function PackageIcon({
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
      <path fill="currentColor" d="M10.95 1.25a.3.3 0 0 1 .3.3v6.4a.3.3 0 0 1-.3.3H1.604a.042.042 0 0 1-.037-.06l2.426-4.853c.273-.547.487-.977.819-1.302A2.75 2.75 0 0 1 5.839 1.4c.439-.15.919-.15 1.53-.15zm2.1 0a.3.3 0 0 0-.3.3v6.4a.3.3 0 0 0 .3.3h9.346a.041.041 0 0 0 .037-.06l-2.426-4.853c-.273-.547-.487-.977-.819-1.302a2.75 2.75 0 0 0-1.027-.635c-.439-.15-.919-.15-1.53-.15z"/><path fill="currentColor" fillRule="evenodd" d="M1.25 10.05a.3.3 0 0 1 .3-.3h20.9a.3.3 0 0 1 .3.3v7.182c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043H6.768c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2zM6 16.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
    </svg>
  );
}
