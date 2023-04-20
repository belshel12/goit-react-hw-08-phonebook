import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './Contacts/filterSlice';
import { contactsReducer } from './Contacts/contactsSlice';
import { authReducer } from './Authorization/authSlice';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
//   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
