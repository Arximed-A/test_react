import { useAppDispatch } from "@/app/hooks";
import ButtonLoading from "@/features/ButtonLoading/ui/ButtonLoading";
import { testAsyncLoadData } from "@/shared/store/about/aboutSlice";
import { useState } from "react";

export default function AboutPage() {
	const dispatch = useAppDispatch()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const load = async () => {
		try{
			setIsLoading(true)
			await dispatch(testAsyncLoadData())
		}
		catch(e){
			console.log(e);
		}
		finally{
			setIsLoading(false)
		}
		
	}
	return (
		<>
			<ButtonLoading loading={isLoading} onClick={load} text="Получить данные"/>
		</>
	)
}