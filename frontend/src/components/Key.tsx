import { HtmlHTMLAttributes } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Key (props: HtmlHTMLAttributes<HTMLDivElement>) {
    const {className, children, ...otherProps} = props;
    return (
        <div className={twMerge("bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-neutral-950 size-14 font-medium", className)} {...otherProps}>{children}</div>
    )
}