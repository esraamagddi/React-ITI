 
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formReducer';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
