import React from 'react'

const Button = ({ className, dark, children }) => {
    return (
        <a className={`leading-[1.2] cursor-pointer text-center rounded-xl px-8 py-5 ${dark ? 'bg-black text-white-main' : 'text-black-main bg-white-main'} font-medium font-dm text-base hover:bg-brand-color hover:text-white-main transition-colors duration-200 ${className}`}>{children}</a>
    )
}

export default Button