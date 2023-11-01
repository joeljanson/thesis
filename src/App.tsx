import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Section title="Abstract" text="This text is about...."></Section>
			<Section
				title="Introduction"
				text="A short introduction about..."
			></Section>
		</div>
	);
}

export default App;
