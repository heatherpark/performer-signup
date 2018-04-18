export const age = minAge => value => {
  const birthdate = new Date(value);
  const now = new Date();
  var diff = now - birthdate;
  var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  return age < minAge ? 
    'You are under 21, please go back to school' : undefined;
}

export const alphanumeric = value => (
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Invalid character has been detected'
    : undefined
);

export const emailMatch = (value, field, fields) => {
  return value !== fields.email1 ? 'Email address doesn\'t match' : undefined
};

export const minLength = min => value => (
  value && value.length < min ?
    `Must be a minimum of ${8} characters` : undefined
);
  
export const required = value => value ? undefined : 'This field is required';
