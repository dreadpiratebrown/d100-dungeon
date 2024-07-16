import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Boulder } from "../Boulder";
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

describe("Boulder", () => {
  it("renders", () => {
    render(<Boulder room={room} />);
    //screen.debug();
  });

  it("moves", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<Boulder room={room} />);
    const btn = screen.getByTestId("moveBoulder");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    expect(btn).not.toBeInTheDocument;
    const msg = screen.getByText(
      "You move the boulder enough to get into the room."
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("does not move", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<Boulder room={room} />);
    const btn = screen.getByTestId("moveBoulder");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "The boulder remains unmoved despite your best efforts. Area off-limits, time + 1, -1 HP"
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
