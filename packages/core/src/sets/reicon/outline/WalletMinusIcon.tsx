import type { IconProps } from "../../../shared/types";

export function WalletMinusIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path fillRule="evenodd" d="M3.75 9.83c0-.43.002-.777.01-1.063A2.75 2.75 0 0 1 6.5 6.25h13.009A2.75 2.75 0 0 1 22.25 9v8.5a2.75 2.75 0 0 1-2.75 2.75h-6.081a.75.75 0 0 0 0 1.5H19.5a4.25 4.25 0 0 0 4.25-4.25V9a4.25 4.25 0 0 0-3.5-4.184v-.645c0-.633 0-1.159-.038-1.579-.039-.43-.123-.847-.36-1.214A2.5 2.5 0 0 0 18.339.3c-.424-.102-.846-.045-1.265.06-.41.101-.906.274-1.505.481L6.37 4.036c-1.212.42-2.016.7-2.625 1.217A4.25 4.25 0 0 0 2.54 6.95c-.197.508-.26 1.064-.28 1.773A4 4 0 0 0 2.25 9v1.581a.75.75 0 0 0 1.5 0zm12.277-7.56c.64-.222 1.073-.372 1.408-.455.332-.083.474-.075.55-.057a1 1 0 0 1 .606.431c.042.066.096.197.127.538.031.344.032.802.032 1.48v.543H8.886z" clipRule="evenodd"/><path d="M18 13.25a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM8 18.625a.625.625 0 1 0 0-1.25H4a.625.625 0 1 0 0 1.25z"/><path fillRule="evenodd" d="M.25 18a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM6 13.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
