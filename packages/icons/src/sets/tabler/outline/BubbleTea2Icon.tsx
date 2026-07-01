import type { IconProps } from "../../../shared/types";

export function BubbleTea2Icon({
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
      <path d="m17.95 9-1.478 8.69c-.25 1.463-.374 2.195-.936 2.631-1.2.931-6.039.88-7.172 0-.562-.436-.687-1.168-.936-2.632L5.95 9M6 9l.514-1.286a5.908 5.908 0 0 1 10.972 0L18 9M5 9h14m-7 0 4-7"/><path d="M7 14c.593.642 1.484 1.017 2.5 1 1.016.017 1.907-.358 2.5-1s1.484-1.017 2.5-1c1.016-.017 1.907.358 2.5 1"/>
    </svg>
  );
}
