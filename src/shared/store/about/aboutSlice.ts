import {createSlice, PayloadAction, } from "@reduxjs/toolkit"

export interface AboutState {
  items: {
		id: number,
		text: string,
	}[]
}

const initialState: AboutState = {
	items: []
}

export const aboutSlice = createSlice({
	name: "about",
	initialState,
	reducers: {
		loadData: (state:AboutState):void => {			
			state.items = [{id: 1, text: "smth"}]
		}
	},
})

export const testAsyncLoadData =  () => async (dispatch) => {
	await new Promise((resolve) => {
		setTimeout(() => {
			dispatch(loadData()); 
			resolve();
		}, 2000);
	});
}

export const {loadData} = aboutSlice.actions


export default aboutSlice.reducer



