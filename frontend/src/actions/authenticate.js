import { USER_REGISTER } from "./constants"

export const register = (user) => {
    return {
        type: USER_REGISTER,
        payload: user,
    }
}