import {memo, ReactNode, useEffect, useState} from "react";
import {fetchStaffPage} from "../api/apiStaffPage";
import {IStaffItem} from "@/page/staffPage/model/modelStaffPage.ts";

const StaffPage = memo(function StaffPage() {
	const [items, setItems] = useState<IStaffItem[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchData: () => Promise<void> = async (): Promise<void> => {
		const data: IStaffItem[] = await fetchStaffPage(setIsLoading);
		setItems(data);
	}
	const itemsList: () => ReactNode[] = (): ReactNode[] => items.map(user => {
		return (
			<tr key={user.id}>
				<th>{user.stext}</th>
				<td>{user.issue_status.label}</td>
				<td>{user.position.stext}</td>
			</tr>

		)
	})

	useEffect(() => {
		fetchData()
	}, []);
	if (isLoading) {
		return (
			<div>Загрузка</div>
		)
	}
	return (
		<>
			<table>
				<thead>
					<tr>
						<th scope="col">ФИО</th>
						<th scope="col">УНЭП</th>
						<th scope="col">Должность</th>
					</tr>
				</thead>
				<tbody>
					{itemsList()}
				</tbody>
			</table>
		</>
	);
})

export default StaffPage;