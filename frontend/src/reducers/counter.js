const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      const newCount = state.count + 1;
      return {
        ...state,
        count: newCount,
      };
    }

    case "DECREMENT_COUNTER": {
      const newCount = state.count >= 1 ? state.count - 1 : 0;
      return {
        ...state,
        count: newCount,
      };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
