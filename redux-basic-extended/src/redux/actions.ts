import { ActionTypes } from './actionTypes'
import { type Action } from '@reduxjs/toolkit'

export const increment = (): Action => ({ type: ActionTypes.INCREMENT })
export const decrement = (): Action => ({ type: ActionTypes.DECREMENT })
