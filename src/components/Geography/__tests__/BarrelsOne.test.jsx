import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { BarrelsOne } from "../BarrelsOne";
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

describe("BarrelsOne", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<BarrelsOne room={room} />);
    //screen.debug();
  });

  it("has a search button", () => {
    room.geoFeatureComplete = false;
    render(<BarrelsOne room={room} />);
    const btn = screen.getByTestId("searchBtn");
    expect(btn).toBeInTheDocument;
  });

  it("shows a result and passes time", () => {
    useBoundStore.setState({ currentQuest: { timeTracker: 0 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 5 });
    render(<BarrelsOne room={room} />);
    const btn = screen.getByTestId("searchBtn");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByTestId("result");
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().currentQuest.timeTracker).toEqual(1);
    mocks.DiceRoll.mockRestore();
  });
});
