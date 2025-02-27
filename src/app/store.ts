import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit"
import userReducer from "@/shared/store/user/userSlice.ts"
import staffReducer from "@/shared/store/staff/staffSlice.ts"
import aboutReducer from "@/shared/store/about/aboutSlice.ts"


export const store = configureStore({
	reducer: {
		userStore: userReducer,
		staffStore: staffReducer,
		aboutStore: aboutReducer,
	},
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
