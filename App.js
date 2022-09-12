import { Provider } from "react-redux";
import { store } from "./src/redux";
import AppNavigator from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
