import { render, fireEvent, screen } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import HomeScreen from "../../../src/screens/home";
import AppNavigator from "../../../src/navigation";

describe("<HomeScreen/>", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onPress should navigate to Contact Us Screen", async () => {
    const component = <AppNavigator />;

    render(component);
    const toClick = await screen.findByText("Contact Us");

    fireEvent(toClick, "press");
    const newHeader = await screen.getByText("Contact Us");

    expect(newHeader).toBeTruthy();
  });
});
