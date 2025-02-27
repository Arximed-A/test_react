import {useMemo, useState,} from "react";

const MainPage = () => {
	const [count, setCount] = useState<number>(1)
	const [another, setAnother] = useState<number>(1)

	const summ:number = useMemo(
		() => count * another,
		[count, another]
	);
	return (
		<>
			<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
			</button>
			<button onClick={() => setAnother((count) => count + 1)}>
				count is {another}
			</button>
			
			<p>summ {summ}</p>
		</>
	)
}
export default MainPage