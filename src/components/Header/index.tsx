import Logo from "../../assets/dribbble.svg";
import Link from "../Link";
import Navbar from "../Navbar";
import "./style.scss";
import { BiSearch } from "react-icons/bi";
const Header = () => {
	return (
		<div className="containerHead">
			<nav className="left">
				<img src={Logo} alt="" />
				<Navbar />
			</nav>
			<ul className="right">
				<li>
					<BiSearch />
				</li>
				<li>
					<Link content="Sign in" url="/" />
				</li>
				<li>
					<Link content="Sign out" url="/" color="#fff" isButton />
				</li>
			</ul>
		</div>
	);
};

export default Header;
