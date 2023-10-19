import { SINGLE_TRIGGER } from '../types'

export const trigger = (payload) => {
    return {
        type: SINGLE_TRIGGER,
        payload,
    }
}