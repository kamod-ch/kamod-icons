import type { IconProps } from "../../../shared/types";

export function ThumbsDownCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12Zm12.25 5.75a.68.68 0 0 1-.592-.34L9.703 13.6c-.15-.258-.24-.412-.303-.578a2.3 2.3 0 0 1-.122-.456c-.028-.175-.028-.354-.028-.652V8.85c0-.309.174-.59.45-.728l.02-.01c.61-.306.94-.47 1.286-.587q.463-.155.946-.223c.362-.051.73-.051 1.414-.051h.367c.398 0 .71 0 .963.018.26.02.475.059.678.147a2 2 0 0 1 .837.68c.127.18.21.383.282.633.07.244.134.55.215.938l.341 1.636c.084.403.15.72.181.978.032.262.03.49-.043.702a1.5 1.5 0 0 1-.658.81c-.193.114-.415.163-.678.186-.258.022-.583.022-.995.022h-1.301l.396 1.98a1.48 1.48 0 0 1-1.45 1.769Zm-5-3.748a1 1 0 0 1-1-1v-4.5a1 1 0 1 1 2 0v4.5a1 1 0 0 1-1 1Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
