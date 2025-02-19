import {SidebarItemsList} from "../model/modelSidebar.ts";
import {Link} from "react-router";


const Sidebar = () => {

	const listItems = SidebarItemsList.map(item =>
		<p key={item.path}>
			<Link to={item.path}>
				{item.text}
			</Link>
		</p>
	);

	return (
		<>
			<aside>
				{listItems}
			</aside>
		</>
	);
}

export default Sidebar;