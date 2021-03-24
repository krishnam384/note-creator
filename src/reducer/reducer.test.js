import { addNotes } from "./action";
import { rootReducer } from "./reducer";

/* eslint no-undef: 0 */
describe("Testing Reducer", () => {
  it("Testing Initial Reducer", () => {
    expect(rootReducer(undefined, {})).toEqual([]);
  });

  it("Testing Add Reducer", () => {
    expect(rootReducer([], addNotes("hello"))).toEqual(["hello"]);
  });
});
