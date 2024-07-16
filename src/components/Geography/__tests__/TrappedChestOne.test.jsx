import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { TrappedChestOne } from "../TrappedChestOne";
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

describe("TrappedChestOne", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<TrappedChestOne room={room} />);
    //screen.debug();
  });

  it("opens the chest", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<TrappedChestOne room={room} />);
    const btn = screen.getByTestId("openChest");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You successfully disarm the trap and open the chest (1). TC+10"
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails to open the chest", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ adjustedHP: 0 });
    useBoundStore.setState({ currentQuest: { timeTracker: 0 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<TrappedChestOne room={room} />);
    const btn = screen.getByTestId("openChest");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You fail to disarm the trap (100). Time +1, -5 HP."
    );
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().adjustedHP).toEqual(-5);
    expect(useBoundStore.getState().currentQuest.timeTracker).toEqual(1);
    mocks.DiceRoll.mockRestore();
  });
});
