import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MainScreen } from "./components/main/MainScreen";
import { FilterBar } from "./components/ui/filter/FilterBar";
import { MenuBar } from "./components/ui/menu/MenuBar";
import { OptionsBar } from "./components/ui/options/OptionsBar";

import { store } from "./store/store";
import "./styles/styles.scss";

export const CryptoEconomyApp = () => {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<MenuBar />
					<FilterBar />
					<OptionsBar />
					<MainScreen />
				</BrowserRouter>
			</Provider>
		</>
	);
};
