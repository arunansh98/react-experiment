import { render, screen } from "@testing-library/react";
import Button from "./components/Button";
import userEvent from "@testing-library/user-event";

test("on click function called", async () => {
  const onClick = jest.fn();

  render(<Button onClick={onClick} />);

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});
