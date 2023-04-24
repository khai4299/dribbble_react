import React from "react";
import "./style.scss";

interface LinkProps {
	isButton?: boolean;
	isBadge?: boolean;
	url?: string;
	color?: string;
	content: string;
	children?: React.ReactNode;
}
const Link = ({
	isButton,
	url,
	color,
	content,
	children,
	isBadge,
}: LinkProps) => {
	return (
		<>
			{url && (
				<a
					href={url}
					className={`link ${isButton ? "isButton" : ""} ${
						isBadge ? "isBadge" : ""
					}`}
					style={{ color: color || "#6e6d7a" }}
				>
					{children}
					<span>{content}</span>
				</a>
			)}
			{!url && <>{content}</>}
		</>
	);
};

export default Link;
