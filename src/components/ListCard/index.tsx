import Card, { CardProps } from "../Card";
import Link from "../Link";
import "./style.scss";
const cards: CardProps[] = [
	{
		img: "https://cdn.dribbble.com/userupload/6479605/file/original-397454ec55701af5e9abde5e7110edfc.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/110372/avatars/mini/8103347774c6a50096789a1fb02edf5d.png?1588232430",
		name: "Shakuro",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6478442/file/original-04a2aa6663ba8111c284f8e728b1596b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Ramotion",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6476613/file/original-078517b2a0dc2093fe58c753e810546b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Yi Li",
		url: "/",
		urlBadge: "/",
		contentBadge: "PRO",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6479605/file/original-397454ec55701af5e9abde5e7110edfc.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/110372/avatars/mini/8103347774c6a50096789a1fb02edf5d.png?1588232430",
		name: "Shakuro",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6478442/file/original-04a2aa6663ba8111c284f8e728b1596b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Ramotion",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6476613/file/original-078517b2a0dc2093fe58c753e810546b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Yi Li",
		url: "/",
		urlBadge: "/",
		contentBadge: "PRO",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6479605/file/original-397454ec55701af5e9abde5e7110edfc.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/110372/avatars/mini/8103347774c6a50096789a1fb02edf5d.png?1588232430",
		name: "Shakuro",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6478442/file/original-04a2aa6663ba8111c284f8e728b1596b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Ramotion",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6476613/file/original-078517b2a0dc2093fe58c753e810546b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Yi Li",
		url: "/",
		urlBadge: "/",
		contentBadge: "PRO",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6479605/file/original-397454ec55701af5e9abde5e7110edfc.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/110372/avatars/mini/8103347774c6a50096789a1fb02edf5d.png?1588232430",
		name: "Shakuro",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6478442/file/original-04a2aa6663ba8111c284f8e728b1596b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Ramotion",
		url: "/",
		urlBadge: "/",
		contentBadge: "TEAM",
	},
	{
		img: "https://cdn.dribbble.com/userupload/6476613/file/original-078517b2a0dc2093fe58c753e810546b.png?compress=1&resize=752x",
		imgUser:
			"https://cdn.dribbble.com/users/25514/avatars/mini/070810be04e642201206c8fbdffcbf8a.png?1455536235",
		name: "Yi Li",
		url: "/",
		urlBadge: "/",
		contentBadge: "PRO",
	},
];
const ListCard = () => {
	return (
		<div className="containerCard">
			<div className="listCard">
				{cards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
			<div className="btns">
				<Link
					content="Sign up to continue"
					url="/"
					color="#fff"
					isButton
				/>
				<Link content="Sign up to continue" url="/" color="#ea4c89" />
			</div>
		</div>
	);
};

export default ListCard;
