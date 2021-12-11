import phoneBookReducer from './phoneBook/phoneBookReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: { phoneBookReducer },
});

export default store;
