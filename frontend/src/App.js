import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./components/HomeRoute";
import NotFound from "./components/pages/notfound/NotFound";
import Index from "./components/pages/index/Index";
import About from "./components/pages/About/About";
import Battle from "./components/pages/Battle/Battle";
import Contact from "./components/pages/Contact/Contact";
import SingleEvent from "./components/pages/SingleEvent/SingleEvent";

const App = createBrowserRouter([
	{
		path: "/",
		element: <HomeRoute />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "battles",
				element: <Battle />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "battles/:eventId",
				element: <SingleEvent />,
			},
		],
	},
]);

export default App;
