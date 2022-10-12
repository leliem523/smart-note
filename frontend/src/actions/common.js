import { DISABLE_LOADER, ENABLE_LOADER } from "./constants"

export const turnOnLoader = () => {
   return {
    type: ENABLE_LOADER
   }
}

export const turnOffLoader = () => {
    return {
     type: DISABLE_LOADER
    }
 }