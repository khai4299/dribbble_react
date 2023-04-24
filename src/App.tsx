import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchHeader from "./components/SeachHeader";
import ListCard from "./components/ListCard";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<SearchHeader />
			<ListCard />
			<Footer />
		</>
	);
}

export default App;
