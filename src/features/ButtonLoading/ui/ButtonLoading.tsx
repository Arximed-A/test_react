import clsx from "clsx";
import { IButtonLoading } from "../model/modelButtonLoading";
import style from "./ButtonLoading.module.scss"
const ButtonLoading = (props: IButtonLoading) => {
	const buttonStyle = clsx(style.btn_flip, props.loading ? style.active : null )

	
	return (
		<>
			<a href="#" onClick={props.onClick} className={buttonStyle} data-back="Загрузка" data-front={props.text}></a>
		</>
	);
}

export default ButtonLoading;