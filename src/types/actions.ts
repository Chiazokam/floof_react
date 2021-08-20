import { DeedType } from './deed';

export enum ActionTypes {
    CREATEDEED = 'CREATEDEED',
    COMPLETEDEED = 'COMPLETEDEED',
    DELETEDEED = 'DELETEDEED',
    UPDATEDEED = 'UPDATEDEED'
}

export type CreateDeed = {
    type: ActionTypes.CREATEDEED;
    payload: DeedType
};

export type CompleteDeed = {
    type: ActionTypes.COMPLETEDEED;
};

export type DeleteDeed = {
    type: ActionTypes.DELETEDEED;
    payload: string;
};

export type UpdateDeed = {
    type: ActionTypes.UPDATEDEED;
    payload: string;
};

export type Actions = CompleteDeed | CreateDeed | UpdateDeed | DeleteDeed;
