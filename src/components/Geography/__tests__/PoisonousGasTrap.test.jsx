import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { PoisonousGasTrap } from "../PoisonousGasTrap";
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

describe("PoisonousGasTrap", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<PoisonousGasTrap room={room} />);
    //screen.debug();
  });

  it("passes", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<PoisonousGasTrap room={room} />);
    const msg = screen.getByText("You avoid the trap.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ adjustedHP: 0 });
    useBoundStore.setState({ currentQuest: { timeTracker: 0 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<PoisonousGasTrap room={room} />);
    const msg = screen.getByText(
      "You fail to avoid the trap. Time +1 and -3 HP."
    );
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().adjustedHP).toEqual(-3);
    expect(useBoundStore.getState().currentQuest.timeTracker).toEqual(1);
    mocks.DiceRoll.mockRestore();
  });
});
