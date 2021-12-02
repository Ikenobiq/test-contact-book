import { createReducer } from "@reduxjs/toolkit";
import { addContact, changeContact, removeContact } from "./actions";
import { generate } from "shortid";
import { combineReducers } from "redux";

const itemsReducer = createReducer(
  {},
  {
    [addContact]: (store, { payload }) => {
      const newContact = { ...payload, id: generate() };
      store.push(newContact);
    },
    [removeContact]: (store, { payload }) => {
      const idx = store.findIndex(({ id }) => id === payload);
      store.splice(idx, 1);
    },
    [changeContact]: (store, { payload }) => {
      const findsIndex = store.findIndex(({ id }) => id === payload.id);
      const oldContact = store[findsIndex];
      store[findsIndex] = {
        ...oldContact,
        ...payload,
      };
    },
  },
);

export default combineReducers({
  items: itemsReducer,
});
