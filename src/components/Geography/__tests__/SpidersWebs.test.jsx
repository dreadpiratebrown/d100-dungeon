import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { SpidersWebs } from "../SpidersWebs";
import { useBoundStore } from "../../../store/boundStore";

const room = { gridLocation: "grid190" };
const div = document.createElement("div");
div.id = "grid190";
document.body.appendChild(div);

describe("SpidersWebs", () => {
  it("renders", () => {
    useBoundStore.setState({ mapTiles: [{ gridLocation: "grid190" }] });
    room.geoFeatureComplete = false;
    render(<SpidersWebs room={room} />);
    //screen.debug();
  });

  it("passes time", () => {
    useBoundStore.setState({ currentQuest: { timeTracker: 0 } });
    room.geoFeatureComplete = false;
    render(<SpidersWebs room={room} />);
    expect(useBoundStore.getState().currentQuest.timeTracker).toEqual(1);
  });
});
