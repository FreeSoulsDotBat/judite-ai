import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@/config/gluestack-ui.config";
import MainScreen from "./MainScreen";

const App = () => {
	return (
		<GluestackUIProvider config={config} colorMode="dark">
			<MainScreen />
		</GluestackUIProvider>
	);
};
export default App;
