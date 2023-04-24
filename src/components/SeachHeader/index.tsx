import { BiSearch } from "react-icons/bi";
import "./style.scss";
import Link from "../Link";
const suggestions = [
	{
		key: 1,
		content: "landing page",
		url: "/",
	},
	{
		key: 2,
		content: "ios",
		url: "/",
	},
	{
		key: 3,
		content: "food",
		url: "/",
	},
	{
		key: 4,
		content: "landingpage",
		url: "/",
	},
	{
		key: 5,
		content: "uxdesign",
		url: "/",
	},
	{
		key: 6,
		content: "app design",
		url: "/",
	},
];
const SearchHeader = () => {
	return (
		<div className="searchHeader">
			<div className="containerHeader">
				<div className="containerPicture ">
					<img
						className="picture"
						src="https://cdn.dribbble.com/assets/searches/search-header-800-67646da500269df6cebd97c90b7d044d714745e368fe4e91ecb3e16e3a7f790e.webp"
						alt=""
					/>
				</div>
				<div className="containerText">
					<h1>Search Dribbble</h1>
					<p>
						21,200,000+ images from thousands of inspirational
						designers
					</p>
				</div>
			</div>
			<div className="containerResult">
				<div className="inputSearch">
					<div className="input">
						<BiSearch />
						<input type="text" placeholder="Search..." />
					</div>
					<div className="verticalDivider"></div>
				</div>
				<ul>
					<Link content="Suggested:" />
					{suggestions.map(suggestion => (
						<Link
							key={suggestion.key}
							content={suggestion.content}
							url={suggestion.url}
							color="#ea4c89"
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SearchHeader;
