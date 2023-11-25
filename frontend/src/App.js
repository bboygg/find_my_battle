import { createBrowserRouter } from "react-router-dom";
import HomeRoute from "./components/HomeRoute";
import NotFound from "./components/pages/notfound/NotFound";
import Index from "./components/pages/index/Index";
import About from "./components/pages/About/About";
import Battle from "./components/pages/Battle/Battle";
import NewBattle from "./components/pages/Add Battle/NewBattle";
import Contact from "./components/pages/Contact/Contact";

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
				path: "battle",
				element: <Battle />,
			},
			{
				path: "newbattle",
				element: <NewBattle />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

export default App;
