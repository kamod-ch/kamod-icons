import type { IconProps } from "../../../shared/types";

export function Lock2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A5.25 5.25 0 0 0 6.75 6.5v1.795c-.539.045-1.013.14-1.452.364a3.75 3.75 0 0 0-1.64 1.638c-.226.445-.32.925-.365 1.471-.043.531-.043 1.187-.043 2v3.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h6.464c.813 0 1.469 0 2-.043.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47.043-.531.043-1.187.043-2v-3.464c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.439-.223-.913-.318-1.452-.363V6.5c0-2.9-2.35-5.25-5.25-5.25Zm3.75 7V6.5a3.75 3.75 0 1 0-7.5 0v1.75z" clipRule="evenodd"/>
    </svg>
  );
}
