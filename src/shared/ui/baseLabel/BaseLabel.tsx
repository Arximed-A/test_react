import {ModelBaseLabel} from "@/shared/ui/baseLabel/modelBaseLabel.ts";
import style from "./BaseLabel.module.scss";
import {memo} from "react";

const BaseLabel = memo(({text, children}: ModelBaseLabel) => {
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