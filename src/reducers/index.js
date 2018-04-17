import { combineReducers } from 'redux';
import ageVerificationForm from './ageVerificationForm';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;