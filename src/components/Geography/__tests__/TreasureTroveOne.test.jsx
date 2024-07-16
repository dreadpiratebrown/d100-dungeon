import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { TreasureTroveOne } from "../TreasureTroveOne";
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

describe("TreasureTroveOne", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 50 });
    render(<TreasureTroveOne room={room} />);
    mocks.DiceRoll.mockRestore();
    //screen.debug();
  });

  it("finds some gold, and shows a result", () => {
    useBoundStore.setState({ gold: 0 });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 50 });
    render(<TreasureTroveOne room={room} />);
    const msg = screen.getByTestId("result");
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().gold).toBe(250);
    mocks.DiceRoll.mockRestore();
  });
});
