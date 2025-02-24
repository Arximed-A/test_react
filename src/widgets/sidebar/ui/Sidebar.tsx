import {SidebarItemsList} from "../model/modelSidebar.ts";
import {NavLink} from "react-router";
import styles from "./Sidebar.module.scss";
import {useState} from "react";
import clsx from "clsx";

const Sidebar = () => {
	const [isActive, setIsActive] = useState(true);
	const sidebarClass = clsx(styles.sidebar, isActive && styles.active);

	const listItems = SidebarItemsList.map(item =>
		<li key={item.path} className={styles.sidebar_item}>
			<NavLink to={item.path} className={({isActive}) =>
				isActive ? styles.active : undefined
			}
			>
				{item.text}
			</NavLink>
		</li>
	);

	return (
		<>
			<aside className={sidebarClass}>
				<ul className={styles.sidebar_content}>
					{listItems}
				</ul>
				<button onClick={() => setIsActive(!isActive)}>свернуть</button>
			</aside>
		</>
	);
}

export default Sidebar;