import { handleError } from "../../action/action";
import { HandleErrorReducer } from "./handleErrorReducer";

/* eslint no-undef: 0 */
describe("Testing Handle Error Reducer", () => {
  it("Testing Initial Reducer", () => {
    expect(HandleErrorReducer(undefined, {})).toEqual({
      code: "Not set",
      message: "Something went wrong",
    });
  });

  it("Testing Error Reducer", () => {
    let props = { history: { push: jest.fn() } };
    expect(HandleErrorReducer(undefined, handleError(props))).toEqual({
      message: "Network Error",
    });
  });
});
