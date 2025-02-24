import {memo} from "react";

interface IBaseInput {
  type?: "text" | "password",
  value: string | number,
  disabled?: boolean,
  onChange?: (value: string) => void;
}

const BaseInput = memo((props: IBaseInput) => {
	const {type = "text", value, disabled, onChange} = props;

	return (
		<>
			<input
				type={type}
				value={value}
				disabled={disabled}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		</>
	);
});

export default BaseInput;