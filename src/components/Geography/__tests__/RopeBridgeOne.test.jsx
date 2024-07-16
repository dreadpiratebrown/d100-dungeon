import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { RopeBridgeOne } from "../RopeBridgeOne";
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

describe("RopeBridgeOne", () => {
  it("renders", () => {
    render(<RopeBridgeOne room={room} />);
    //screen.debug();
  });

  it("crosses the bridge", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<RopeBridgeOne room={room} />);
    const btn = screen.getByTestId("crossBridge");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You manage to make your way across the bridge without incident."
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails to cross the bridge", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<RopeBridgeOne room={room} />);
    const btn = screen.getByTestId("crossBridge");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You fall while crossing the bridge. -10 HP, but you can still use the exits."
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
