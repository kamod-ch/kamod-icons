import type { IconProps } from "../../../shared/types";

export function UserEditIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M10 1.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM6.25 6.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M2.743 20.106C3.176 17.073 6.266 14.75 10 14.75c.881 0 1.735.132 2.528.375a.75.75 0 0 0 .44-1.434 10.1 10.1 0 0 0-2.968-.44c-4.266 0-8.177 2.676-8.743 6.643a.75.75 0 0 0 1.485.212Z"/><path fill="currentColor" fillRule="evenodd" d="M18.735 11.654a2.25 2.25 0 0 1 2.569 0c.166.115.323.273.506.455l.08.08c.184.184.341.34.457.507a2.25 2.25 0 0 1 0 2.57c-.115.166-.273.323-.456.506l-5.983 5.985a.75.75 0 0 1-.363.2l-3.378.774a.75.75 0 0 1-.898-.899l.774-3.373a.75.75 0 0 1 .2-.363l5.986-5.986c.182-.183.34-.34.506-.456Zm1.713 1.231a.75.75 0 0 0-.857 0c-.04.029-.096.08-.342.326l-.479.479 1.541 1.54.48-.478c.245-.247.296-.302.325-.343a.75.75 0 0 0 0-.856c-.029-.041-.08-.096-.326-.342s-.301-.297-.342-.326Zm-1.197 3.406-1.541-1.54-4.253 4.253L13 21.002l2-.458z" clipRule="evenodd"/>
    </svg>
  );
}
