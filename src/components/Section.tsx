import React from "react";

export interface SectionProps {
	title?: string;
	text?: string;
}

const Section: React.FC<SectionProps> = ({ title, text }) => {
	return (
		<div className="section">
			<h1 className="title">{title}</h1>
			<p className="paragraph">{text}</p>
		</div>
	);
};

export default Section;
