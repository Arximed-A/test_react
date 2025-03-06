import clsx from "clsx";
import { IButtonLoading } from "../model/modelButtonLoading";
import style from "./ButtonLoading.module.scss"
const ButtonLoading = (props: IButtonLoading) => {
	const buttonStyle = clsx(style.btn_flip, props.loading ? style.active : null )

	
	return (
		<>
			<button 
				onClick={props.onClick} 
				className={buttonStyle} 
				data-back="Загрузка" 
				data-front={props.text}>
			</button>
		</>
	);
}

export default ButtonLoading;