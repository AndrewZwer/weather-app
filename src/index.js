import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import WeatherApp from "./components/weather-app";

import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<WeatherApp />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root"));