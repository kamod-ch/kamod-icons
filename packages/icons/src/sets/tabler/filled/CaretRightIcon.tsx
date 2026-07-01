import type { IconProps } from "../../../shared/types";

export function CaretRightIcon({
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
      <path d="M9 6c0-.852.986-1.297 1.623-.783l.084.076 6 6a1 1 0 0 1 .083 1.32l-.083.094-6 6-.094.083-.077.054-.096.054-.036.017-.067.027-.108.032-.053.01-.06.01-.057.004L10 19l-.059-.002-.058-.005-.06-.009-.052-.01-.108-.032-.067-.027-.132-.07-.09-.065-.081-.073-.083-.094-.054-.077-.054-.096-.017-.036-.027-.067-.032-.108-.01-.053-.01-.06-.004-.057z"/>
    </svg>
  );
}
