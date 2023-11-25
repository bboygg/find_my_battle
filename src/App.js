import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeRoute from "./components/HomeRoute";
import NotFound from "./components/pages/notfound/NotFound";
import Index from "./components/pages/index/Index";

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
		],
	},
]);

export default App;
