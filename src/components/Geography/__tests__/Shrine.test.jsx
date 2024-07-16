import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Shrine } from "../Shrine";
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

describe("Shrine", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<Shrine room={room} />);
    //screen.debug();
  });

  it("has a pray button", () => {
    room.geoFeatureComplete = false;
    render(<Shrine room={room} />);
    const btn = screen.getByTestId("prayBtn");
    expect(btn).toBeInTheDocument;
  });

  it("shows a result and passes time", () => {
    useBoundStore.setState({ currentQuest: { timeTracker: 0 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 5 });
    render(<Shrine room={room} />);
    const btn = screen.getByTestId("prayBtn");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByTestId("result");
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().currentQuest.timeTracker).toEqual(1);
    mocks.DiceRoll.mockRestore();
  });
});
