export const alphanumeric = value => (
  value && /[^a-zA-Z0-9 ]/i.test(value)
  ? 'Invalid character has been detected'
  : undefined
);

// export const minLength = min => value => (
//   value && value.length < min ?
//     `Minimum ${min} characters` : undefined
// );

export const minLength = min => value => (
  value && value.length < min ?
    `Must be a minimum of ${8} characters` : undefined
);
  
export const required = value => value ? undefined : 'This field is required';
