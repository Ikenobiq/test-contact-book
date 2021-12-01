import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./actions";
import { generate } from "shortid";
import { combineReducers } from "redux";

const itemsReducer = createReducer([], {
  [addContact]: (store, { payload }) => {
    const newContact = { ...payload, id: generate() };
    store.push(newContact);
  },
  [removeContact]: (store, { payload }) => {
    const findAndDelete = store.findIndex(({ id }) => id === payload);
    store.splice(findAndDelete, 1);
  },
});

export default combineReducers({
  items: itemsReducer,
});
