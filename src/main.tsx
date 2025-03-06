import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from "@/app/store.ts";
import { Provider } from "react-redux";

async function enableMocking() {
	if (process.env.NODE_ENV === "development") {
		const { worker } = await import("./mocks/browser.ts");
		return worker.start();
	}
}

const rootElement = document.getElementById("root");

if (rootElement) {
	const root = createRoot(rootElement);

	enableMocking().then(() => {
		root.render(
			<StrictMode>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="*" element={<App />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</StrictMode>
		);
	});
} else {
	console.error("Root element not found");
}