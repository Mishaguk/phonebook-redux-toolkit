import { createAction } from '@reduxjs/toolkit';

export const contactAdd = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const filterContact = createAction('FILTER_CONTACT');
export const loadContacts = createAction('LOAD_CONTACTS');

// const toExport = { contactAdd, deleteContact, filterContact, loadContacts };

//  default toExport;
