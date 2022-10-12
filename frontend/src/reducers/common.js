import { DISABLE_LOADER, ENABLE_LOADER } from "../actions/constants";

const initialState = {
   loader: false,
  };
  
  const CommonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ENABLE_LOADER: {
            return {
                ...payload,
                loader: true,
            }
        }
        case DISABLE_LOADER: {
            return {
                ...payload,
                loader: false,
            }
        }
      default: {
        return state;
      }
    }
  };
  
  export default CommonReducer;
  