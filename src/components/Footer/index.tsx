import Link from "../Link";
import Logo from "../../assets/dribbble.svg";
import "./style.scss";
const Footer = () => {
	return (
		<div className="footer">
			<Link url="/" content="">
				<img src={Logo} alt="" />
			</Link>
			<div className="tagline">
				Dribbble is the world’s leading community for creatives to
				share, grow, and get hired.
			</div>
		</div>
	);
};

export default Footer;
