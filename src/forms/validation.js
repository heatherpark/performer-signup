export const alphanumeric = value => (
  value && /[^a-zA-Z0-9 ]/i.test(value)
  ? 'Only alphanumeric characters'
  : undefined);

export const required = value => value ? undefined : 'Required';