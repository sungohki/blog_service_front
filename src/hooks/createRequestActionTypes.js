const createRequestActionTypes = (base) => {
  const SUCCESS = `${base}_SUCCESS`;
  const FAILURE = `${base}_FAILURE`;

  return [base, SUCCESS, FAILURE];
};

export default createRequestActionTypes;
