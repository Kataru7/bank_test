const initialState = {
  choiceMethod: {},
  users: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_DATA":
      return {
        ...state,
        ...action.payload,
      };
      break;
    case "CREATE_DATA_LIST":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
      break;
    case "CHOICE_METHOD":
      return {
        ...state,
        choiceMethod: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
}
