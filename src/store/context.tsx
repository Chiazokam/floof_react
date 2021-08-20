import React, { createContext, useReducer, useEffect } from "react";
import { DeedType, Actions, ActionTypes } from '../types';

type InitialState = {
  activeDeeds: DeedType[];
  completedDeeds: DeedType[];
}
type AppContext = {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

const initialState: InitialState = {
  activeDeeds: [],
  completedDeeds: []
};

const store = createContext<AppContext>({
  state: initialState,
  dispatch: () => null
});

const { Provider } = store;

const reducer = (state: InitialState, action: Actions) => {
  const { activeDeeds, completedDeeds } = state;

  switch (action.type) {
    case ActionTypes.CREATEDEED:
      return {
        ...state,
        activeDeeds: [action.payload, ...activeDeeds],
      };
    case ActionTypes.COMPLETEDEED:
      return {
        ...state,
      };
    case ActionTypes.DELETEDEED:
      return {
        ...state,
      };
    case ActionTypes.UPDATEDEED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, AppProvider };
