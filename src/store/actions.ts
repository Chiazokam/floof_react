import { ActionTypes, DeedType } from '../types';

export const createDeedAction = (payload: DeedType) => ({
    type: ActionTypes.CREATEDEED,
    payload
});

export const completeDeedAction = (payload: DeedType) => ({
    type: ActionTypes.COMPLETEDEED,
    payload
})

export const deleteDeedAction = (payload: DeedType) => ({
    type: ActionTypes.DELETEDEED,
    payload
})

export const updateDeedAction = (payload: DeedType) => ({
    type: ActionTypes.UPDATEDEED,
    payload
})
