export const alphanumeric = value => (
  value && /[^a-zA-Z0-9 ]/i.test(value)
  ? 'Invalid character has been detected'
  : undefined
);

export const emailMatch = (value, field, fields) => {
  return value !== fields.email1 ? 'Email address doesn\'t match' : undefined;
};

export const minLength = min => value => (
  value && value.length < min ?
    `Must be a minimum of ${8} characters` : undefined
);
  
export const required = value => value ? undefined : 'This field is required';
