import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import type {RootState} from "@/app/store.ts"
import {IProfile} from "@/shared/model/types.ts";


export interface UserState {
  user: IProfile | null
}

const initialState: UserState = {
	user: null
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state: UserState, action: PayloadAction<IProfile>): void => {
			state.user = action.payload
		},
		clearUser: state => {
			state.user = null
		}
	},
})


export const {setUser, clearUser} = userSlice.actions

export default userSlice.reducer

export const selectUser = (state: RootState): IProfile | null => state.userStore.user

