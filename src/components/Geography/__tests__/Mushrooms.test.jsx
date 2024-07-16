import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Mushrooms } from "../Mushrooms";
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

describe("Mushrooms", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<Mushrooms room={room} />);
    //screen.debug();
  });

  it("has an eat mushrooms button", () => {
    room.geoFeatureComplete = false;
    render(<Mushrooms room={room} />);
    const btn = screen.getByTestId("eatMushrooms");
    expect(btn).toBeInTheDocument;
  });

  it("shows a result", () => {
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 5 });
    render(<Mushrooms room={room} />);
    const btn = screen.getByTestId("eatMushrooms");
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    const msg = screen.getByTestId("result");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
