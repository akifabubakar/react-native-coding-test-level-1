import { render, fireEvent, screen } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import ContactUsScreen from "../../../src/screens/contact";

describe("<ContactUsScreen/>", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<ContactUsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change state if name & email is entered", async () => {
    const component = <ContactUsScreen />;

    render(component);
    const inputName = await screen.findByPlaceholderText("Name");
    const inputEmail = await screen.getByPlaceholderText("Email");

    fireEvent.changeText(inputName, "anon");
    fireEvent.changeText(inputEmail, "anon@gmail.com");

    const newName = await screen.getByTestId("nameTest");
    expect(newName.props.value).toEqual("anon");

    const newEmail = await screen.getByTestId("emailTest");
    expect(newEmail.props.value).toEqual("anon@gmail.com");
  });
});
