import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Portcullis } from "../Portcullis";
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

describe("Portcullis", () => {
  it("renders", () => {
    render(<Portcullis room={room} />);
    //screen.debug();
  });

  it("opens", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<Portcullis room={room} />);
    const btn = screen.getByTestId("openPortcullis");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    expect(btn).not.toBeInTheDocument;
    const msg = screen.getByText(
      "You open the portcullis enough to slip underneath."
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("remains closed", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<Portcullis room={room} />);
    const btn = screen.getByTestId("openPortcullis");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "The portcullis remains closed despite your best efforts. Area off-limits, time + 1, -1 HP"
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
