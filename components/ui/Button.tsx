import type { ButtonHTMLAttributes } from "react";
export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={`min-h-11 rounded-md bg-ink px-5 font-semibold text-white hover:bg-ink/90 ${className}`} {...props} />; }
