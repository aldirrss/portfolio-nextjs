import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiOdoo } from "react-icons/si";

const socials = [
	{ icon: <FaGithub />, path: "https://github.com/mrAldirs" },
	{
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/aldi-rosid-saputra-5077a728b",
	},
	{
		icon: <SiOdoo />,
		path: "https://apps.odoo.com/apps/modules/browse?author=Lema%20Core%20Technologies",
	},
];

const Social = ({
	containerStyles,
	iconStyles,
}: {
	containerStyles: any;
	iconStyles: any;
}) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link key={index} href={item.path} className={iconStyles}>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Social;
