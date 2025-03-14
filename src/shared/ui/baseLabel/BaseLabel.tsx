import {IModelBaseLabel} from "@/shared/ui/baseLabel/modelBaseLabel.ts";
import style from "./BaseLabel.module.scss";
import {memo} from "react";

const BaseLabel = memo(function BaseLabel({text, children}: IModelBaseLabel) {
	return (
		<>
			<div className={style.container}>
				<p className={style.label}>{text}</p>
				{children}
			</div>
		</>
	);
});

export default BaseLabel;