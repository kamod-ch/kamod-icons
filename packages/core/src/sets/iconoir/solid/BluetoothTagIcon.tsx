import type { IconProps } from "../../../shared/types";

export function BluetoothTagIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm4.4 3.233A.75.75 0 0 0 11.107 6v4.407L9.486 9.029a.75.75 0 1 0-.972 1.143L10.666 12l-2.152 1.829a.75.75 0 1 0 .972 1.143l1.621-1.379V18a.75.75 0 0 0 1.293.517l3.143-3.3a.75.75 0 0 0-.057-1.088L12.982 12l2.504-2.129a.75.75 0 0 0 .057-1.088zm1.51 9.275-1.303-1.108v2.475zm-1.303-6.883v2.475l1.303-1.107z" clipRule="evenodd"/>
    </svg>
  );
}
