import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Actors from "./pages/Actors";
import Contact from "./pages/Contact";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/series" element={<Series />} />
				<Route path="/actors" element={<Actors />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
