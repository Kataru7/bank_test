const initialState = {
  singInUser: false,
  choiceMethod: {},
  edit: false,
  editId: "",
  users: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "CREATE_DATA_LIST":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case "CHOICE_METHOD":
      return {
        ...state,
        choiceMethod: action.payload,
      };
    case "SING_IN":
      return {
        ...state,
        singInUser: action.payload,
      };
    case "EDIT":
      return {
        ...state,
        users: action.payload,
      };
    case "EDIT_ID":
      return {
        ...state,
        edit: true,
        editId: action.payload,
      };

    default:
      return state;
  }
}
