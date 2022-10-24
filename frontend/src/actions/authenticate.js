import { USER_LOGOUT, USER_REGISTER } from "./constants"

export const register = (user) => {
    return {
        type: USER_REGISTER,
        payload: user,
    }
}

export const logout = () => {
    return {
        type: USER_LOGOUT,
    }
}