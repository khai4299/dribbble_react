import Link from "../Link";
import "./style.scss";
export interface CardProps {
	img: string;
	imgUser: string;
	name: string;
	contentBadge: string;
	url: string;
	urlBadge: string;
}
const Card = ({ img, imgUser, name, contentBadge }: CardProps) => {
	return (
		<div className="card">
			<img src={img} alt="" />
			<div className="description">
				<div className="userInfo">
					<Link content={name} url="/">
						<img src={imgUser} alt="" />
					</Link>
					<Link content={contentBadge} url="/" color="#fff" isBadge />
				</div>
			</div>
		</div>
	);
};

export default Card;
