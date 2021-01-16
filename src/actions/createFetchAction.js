export default ({ key, url }) => {
  const KEY = key.toUpperCase();

  const [START, SUCCESS, FAIL] = ["START", "SUCCESS", "FAIL"].map(
    (k) => `${KEY}_${k}`
  );

  let type;

  return () => (dispatch, getState) => {
    type = START;
    dispatch({
      type
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        type = SUCCESS;
        dispatch({
          type,
          data
        });
      })
      .catch((error) => {
        type = FAIL;
        dispatch({
          type,
          error
        });
      });
  };
};
