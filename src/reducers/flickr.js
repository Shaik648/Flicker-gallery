export default (
  state = { loading: false, exif: {} },
  { type, data, error }
) => {
  return (
    {
      SEARCH_SUCCESS: {
        ...state,
        ...data,
        loading: false
      },
      SEARCH_START: {
        ...state,
        loading: true
      },
      SEARCH_FAIL: {
        ...state,
        error,
        loading: false
      },
      GET_EXIF_START: {
        ...state,
        popLoading: true
      },
      GET_EXIF_SUCCESS: {
        ...state,
        exif: data
          ? {
              ...state.exif,
              [data.id]: data
            }
          : state.exif,
        popLoading: false
      },
      GET_EXIF_FAIL: {
        ...state,
        error,
        popLoading: false
      }
    }[type] || state
  );
};
