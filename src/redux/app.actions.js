export const startIncrement = () => {
  return {
    type: "INCREMENT_START",
  };
};

export const startDecrement = () => {
  return {
    type: "DECREMENT_START",
  };
};

export const incrementFromSaga = () => {
  return {
    type: "INCREMENT_FROM_SAGA",
  };
};
