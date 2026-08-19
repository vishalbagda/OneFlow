import type { InputHTMLAttributes } from "react";
export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) { return <input className={`min-h-11 w-full rounded-md border bg-white px-3 text-ink placeholder:text-slate focus:border-amber focus:outline-none ${className}`} {...props} />; }
