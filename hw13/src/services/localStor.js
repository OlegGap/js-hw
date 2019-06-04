export const set = (label, value ) => {
  console.log(value);
  localStorage.setItem(label, JSON.stringify(value));
};

export const get = ( label ) => {
  console.log(label);
  const res = localStorage.getItem(label);
  return res ? JSON.parse(res) : null;
};
