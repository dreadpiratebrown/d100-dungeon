import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Forge } from "../Forge";
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

describe("Forge", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 50 });
    render(<Forge room={room} />);
    mocks.DiceRoll.mockRestore();
    //screen.debug();
  });

  it("finds a weapon and armor, adds them, and shows a result", () => {
    useBoundStore.setState({ itemsWithDamageTrack: [] });
    room.geoFeatureComplete = false;
    mocks.DiceRoll.mockReturnValue({ total: 50 });
    render(<Forge room={room} />);
    expect(useBoundStore.getState().itemsWithDamageTrack[0].name).toBe(
      "Half Maul"
    );
    expect(useBoundStore.getState().itemsWithDamageTrack[1].name).toBe(
      "Studded Leather Gloves"
    );
    const msg = screen.getByTestId("result");
    expect(msg).toBeInTheDocument;
    mocks.DiceRoll.mockRestore();
  });
});
