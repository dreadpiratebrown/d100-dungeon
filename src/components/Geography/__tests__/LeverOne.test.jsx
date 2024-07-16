import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { LeverOne } from "../LeverOne";
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

describe("LeverOne", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<LeverOne room={room} />);
    //screen.debug();
  });

  it("has a button", () => {
    room.geoFeatureComplete = false;
    render(<LeverOne room={room} />);
    const btn = screen.getByTestId("pullLever");
    expect(btn).toBeInTheDocument;
  });

  it("shows a result and increases levers", () => {
    useBoundStore.setState({ levers: 0 });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 6 });
    render(<LeverOne room={room} />);
    const btn = screen.getByTestId("pullLever");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByTestId("result");
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().levers).toEqual(1);
    mocks.DiceRoll.mockRestore();
  });
});
