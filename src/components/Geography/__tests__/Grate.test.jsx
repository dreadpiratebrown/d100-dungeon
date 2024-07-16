import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Grate } from "../Grate";
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

describe("Grate", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<Grate room={room} />);
    //screen.debug();
  });

  it("fails", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<Grate room={room} />);
    const btn = screen.getByTestId("liftGrate");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText("The grate remains unmoved. Time +1");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("succeeds and you lift the grate", () => {
    useBoundStore.setState({ str: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValueOnce({ total: 1 }).mockReturnValueOnce({
      total: 1,
    });
    render(<Grate room={room} />);
    const btn = screen.getByTestId("liftGrate");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText("It was nothing of interest.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
