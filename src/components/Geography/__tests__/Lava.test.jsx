import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Lava } from "../Lava";
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

describe("Lava", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<Lava room={room} />);
    //screen.debug();
  });

  it("passes", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ adjustedHP: 0 });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 1 });
    render(<Lava room={room} />);
    const msg = screen.getByText(
      "You barely avoid the lava but still take some damage. -1 HP"
    );
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().adjustedHP).toEqual(-1);
    mocks.DiceRoll.mockRestore();
  });

  it("fails", () => {
    useBoundStore.setState({ dex: { primary: 30 } });
    useBoundStore.setState({ adjustedHP: 0 });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 100 });
    render(<Lava room={room} />);
    const msg = screen.getByText(
      "You get burned by the lava and exploding rocks. -3 HP"
    );
    expect(msg).toBeInTheDocument;
    expect(useBoundStore.getState().adjustedHP).toEqual(-3);
    mocks.DiceRoll.mockRestore();
  });
});
