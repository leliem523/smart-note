import { USER_REGISTER, USER_LOGOUT } from "../actions/constants";

const initialState = {
  listUser: [
    {
      id: 1,
      email: "tranlong123@gmail.com",
      password: "12345678",
      userName: "Tran Long",
    },
    {
      id: 2,
      email: "tranthicamgiang456@gmail.com",
      password: "12345678",
      userName: "Cam Giang",
    },
    {
      id: 3,
      email: "halongbay123@gmail.com",
      password: "12345678",
      userName: "Long Bay",
    },
  ],
};

const AuthenticateReducer = (
  state = initialState,
  { type = null, payload = null }
) => {
  switch (type) {
    case USER_REGISTER: {
      const newUser = [...state.listUser];
      newUser.push(payload);
      return {
        ...state,
        listUser: newUser,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("Auth:user");
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthenticateReducer;
