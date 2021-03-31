import {
  addNotes,
  handleError,
  ADD_NOTES,
  ERROR,
  fetchSignupAsync,
  FETCH_PENDING,
} from "./action";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

/* eslint no-undef: 0 */
describe("Testing Actions", () => {
  it("Testing addNotes Action", () => {
    expect(addNotes("hello")).toEqual({
      type: ADD_NOTES,
      payload: "hello",
    });
  });

  it("Testing Error Action", () => {
    let props = { history: { push: jest.fn() } };
    expect(handleError(props)).toEqual({
      type: ERROR,
      props: props,
    });
  });

  it("Testing Asynchronous Action", () => {
    const store = mockStore();
    const user = {
      username: "dsnglkng",
      email: "sd@gafgdf.com",
      phone: "dbfdgdsg",
      password: "dgsdgsgh",
    };
    store.dispatch(fetchSignupAsync(user));
    const actions = store.getActions();
    const expectedAction = {
      type: FETCH_PENDING,
    };

    expect(actions[0]).toEqual(expectedAction);
  });
});
