import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { GiantBallTrap } from "../GiantBallTrap";
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

describe("GiantBallTrap", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<GiantBallTrap room={room} />);
    //screen.debug();
  });

  it("passes", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<GiantBallTrap room={room} />);
    const msg = screen.getByText("You avoid the trap.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    useBoundStore.setState({ adjustedHP: 0 });
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<GiantBallTrap room={room} />);
    const msg = screen.getByText(
      "You fail to avoid the trap. Belt check and -6 HP."
    );
    expect(msg).toBeInTheDocument;
    // come up with a test for the belt check
    expect(useBoundStore.getState().adjustedHP).toEqual(-6);
    mocks.DiceRoll.mockRestore();
  });
});
