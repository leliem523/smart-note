const initialState = {
  listUser: [
    {
      id: 1,
      email: "tranlong123@gmail.com",
      password: "12345678",
    },
    {
      id: 2,
      email: "tranthicamgiang456@gmail.com",
      password: "12345678",
    },
    {
      id: 3,
      email: "halongbay123@gmail.com",
      password: "12345678",
    },
  ],
};

const AuthenticateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};

export default AuthenticateReducer;
