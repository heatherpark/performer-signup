import { combineReducers } from 'redux';
import ageVerificationForm from './ageVerificationForm';

const rootReducer = combineReducers({
  ageVerificationForm: ageVerificationForm
});

export default rootReducer;