import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { RiverOne } from "../RiverOne";
import { useBoundStore } from "../../../store/boundStore";

const mocks = vi.hoisted(() => {
  return {
    DiceRoll: vi.fn(),
  };
});

vi.mock("@dice-roller/rpg-dice-roller", () => {
  return {
    DiceRoll: mocks.DiceRoll,
  };
});

const room = { gridLocation: "grid190" };
const div = document.createElement("div");
div.id = "grid190";
document.body.appendChild(div);

describe("RiverOne", () => {
  it("renders", () => {
    render(<RiverOne room={room} />);
    //screen.debug();
  });

  it("swims the river", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<RiverOne room={room} />);
    const btn = screen.getByTestId("swimRiver");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You swim the river and make it to the other side."
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails to swim the river", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<RiverOne room={room} />);
    const btn = screen.getByTestId("swimRiver");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You fail to swim the river and wash back up on the side you started from. Time +1, -2 HP"
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
