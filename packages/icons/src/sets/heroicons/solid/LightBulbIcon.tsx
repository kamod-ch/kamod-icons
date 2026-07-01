import type { IconProps } from "../../../shared/types";

export function LightBulbIcon({
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
      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706q.528.124 1.074.195c.323.041.6-.218.6-.544v-4.661a7 7 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.26 5.26 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 7 7 0 0 1-.937.172v4.66a.54.54 0 0 0 .6.545 11 11 0 0 0 1.074-.195.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75"/><path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.3 11.3 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.8 12.8 0 0 1-4.78 0 .75.75 0 0 1-.597-.876m.741 2.444a.75.75 0 0 1 .824-.668 13.7 13.7 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15 15 0 0 1-3.156 0 .75.75 0 0 1-.668-.824" clipRule="evenodd"/>
    </svg>
  );
}
