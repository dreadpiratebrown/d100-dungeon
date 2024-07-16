import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { LockedChestOne } from "../LockedChestOne";
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

describe("LockedChestOne", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<LockedChestOne room={room} />);
    //screen.debug();
  });

  it("has a key", () => {
    useBoundStore.setState({ keys: 1 });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<LockedChestOne room={room} />);
    const btn = screen.getByTestId("openChest");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You have the key to this chest. It opens. TC"
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("does not have a key", () => {
    useBoundStore.setState({ keys: 0 });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<LockedChestOne room={room} />);
    const btn = screen.getByTestId("openChest");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You don't have the key. You'll have to pick the lock."
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("picks the lock", () => {
    useBoundStore.setState({ keys: 0 });
    useBoundStore.setState({ picks: 1 });
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<LockedChestOne room={room} />);
    const btn = screen.getByTestId("openChest");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You successfully pick the lock and open the chest (1). TC"
    );
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails to pick the lock", () => {
    useBoundStore.setState({ keys: 0 });
    useBoundStore.setState({ picks: 1 });
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ picks: 1 });
    useBoundStore.setState({ currentQuest: { timeTracker: 0 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<LockedChestOne room={room} />);
    const btn = screen.getByTestId("openChest");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    fireEvent.click(btn);
    const msg = screen.getByText(
      "You fail to pick the lock (100). Time +1, picks -1."
    );
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().picks).toEqual(0);
    expect(useBoundStore.getState().currentQuest.timeTracker).toEqual(1);
    mocks.DiceRoll.mockRestore();
  });
});
