import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { BottomlessPit } from "../BottomlessPit";
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

describe("BottomlessPit", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<BottomlessPit room={room} />);
    //screen.debug();
  });

  it("jumps the pit", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<BottomlessPit room={room} />);
    const btn = screen.getByTestId("jumpPit");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText("You successfully jump across the pit.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });

  it("falls into the pit", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<BottomlessPit room={room} />);
    const btn = screen.getByTestId("jumpPit");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByText("You fall into the abyss. You are dead.");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
