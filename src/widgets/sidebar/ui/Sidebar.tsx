import {SidebarItemsList} from "../model/modelSidebar.ts";
import {NavLink} from "react-router";
import styles from "./Sidebar.module.scss";
import {useState} from "react";
import clsx from "clsx";
import {selectUser} from "@/shared/store/user/userSlice.ts";
import {useAppSelector} from "@/app/hooks.ts";
import {RoutePath} from "@/shared/routerList/routeConfig.ts";
import {IProfile} from "@/shared/model/types.ts";

const Sidebar = () => {
	const [isActive, setIsActive] = useState(true);
	const sidebarClass = clsx(styles.sidebar, isActive && styles.active);
	const isAuth: IProfile | null = useAppSelector(selectUser);
	// const isAuth2: IStaffItem = useAppSelector(selectItems);
	// console.log(isAuth)

	const listItems = SidebarItemsList.map(item => {
		if (item.authOnly && isAuth) {
			return null;
		}
		return (
			<li key={item.path} className={styles.sidebar_item}>
				<NavLink to={item.path} className={({isActive}) =>
					isActive ? styles.active : undefined
				}
				>
					{item.text}
				</NavLink>
			</li>)
	})
	const authButton = () => {

		return (
			<li className={styles.sidebar_item}>
				{!isAuth ? <NavLink to={RoutePath.login} className={({isActive}) =>
					isActive ? styles.active : undefined
				}
				>
          Войти
				</NavLink> : <NavLink to={RoutePath.logout} className={({isActive}) =>
					isActive ? styles.active : undefined
				}>Выйти</NavLink>}

			</li>
		)
	}
	return (
		<>
			<aside className={sidebarClass}>
				<ul className={styles.sidebar_content}>
					{listItems}
					{authButton()}
				</ul>
				<button onClick={() => setIsActive(!isActive)}>свернуть</button>
			</aside>
		</>
	);
}

export default Sidebar;