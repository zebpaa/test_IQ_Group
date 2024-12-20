import type { ReactNode } from "react"

import React from "react"

import cls from "./Button.module.scss"

interface ButtonProps {
	children: ReactNode
	variant?: "primary" | "active" | "cancel"
	width?: string
	type?: "submit" | "button"
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	width,
	type = "button",
}) => {
	return (
		<button
			type={type}
			className={cls[variant]}
			style={{ width: `${width}px` || "auto" }}
		>
			{children}
		</button>
	)
}

export default Button
