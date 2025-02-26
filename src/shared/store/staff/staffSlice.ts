import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import type {RootState} from "@/app/store.ts"
import {IStaffItem} from "@/page/staffPage/model/modelStaffPage.ts";


export interface StaffState {
  items: IStaffItem[]
}

const initialState: StaffState = {
	items: []
}

export const staffSlice = createSlice({
	name: "staff",
	initialState,
	reducers: {
		setItems: (state: StaffState, action: PayloadAction<IStaffItem[]>): void => {
			state.items = action.payload
		},
	},
})


export const {setItems} = staffSlice.actions

export default staffSlice.reducer

export const selectItems = (state: RootState): IStaffItem[] => state.staffStore.items

