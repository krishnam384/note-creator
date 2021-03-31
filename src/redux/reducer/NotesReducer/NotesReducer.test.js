import { addNotes } from "../../action/action";
import { notesReducer } from "./NotesReducer";

/* eslint no-undef: 0 */
describe("Testing Reducer", () => {
  it("Testing Initial Reducer", () => {
    expect(notesReducer(undefined, {})).toEqual([]);
  });

  it("Testing Add Reducer", () => {
    expect(notesReducer([], addNotes("hello"))).toEqual(["hello"]);
  });
});
