import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { CageTrap } from "../CageTrap";
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

describe("CageTrap", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<CageTrap room={room} />);
    //screen.debug();
  });

  it("passes", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<CageTrap room={room} />);
    const msg = screen.getByText("You avoid the trap.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<CageTrap room={room} />);
    const msg = screen.getByText("You fail to avoid the trap.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails, but you lift the cage", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ str: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValueOnce({ total: 100 }).mockReturnValueOnce({
      total: 1,
    });
    render(<CageTrap room={room} />);
    const btn = screen.getByTestId("liftCage");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText("You lift the cage and free yourself.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("fails, and you don't lift the cage", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ str: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValueOnce({ total: 100 }).mockReturnValueOnce({
      total: 100,
    });
    render(<CageTrap room={room} />);
    const btn = screen.getByTestId("liftCage");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    expect(btn).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
