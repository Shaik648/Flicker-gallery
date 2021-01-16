import qs from "query-string";

const api_key = "cbcceafb06a6027cc9615b81d9220d39";
const request = ({ method, param }) => {
  const requestParam = {
    api_key,
    method,
    format: "json",
    nojsoncallback: 1,
    ...param
  };
  const url = `https://api.flickr.com/services/rest/?${qs.stringify(
    requestParam
  )}`;

  return fetch(url).then((res) => res.json());
};

export default {
  search: (keyword) => (dispatch, getState) => {
    dispatch({
      type: "SEARCH_START"
    });

    request({
      method: "flickr.photos.search",
      param: {
        text: keyword,
        tags: keyword,
        sort: "interestingness-desc" //'date-taken-desc'
      }
    })
      .then((data) => {
        dispatch({
          type: "SEARCH_SUCCESS",
          data
        });
      })
      .catch((error) => {
        dispatch({
          type: "SEARCH_ERROR",
          error
        });
      });
  },
  getExif: (id, secret, url) => (dispatch, getState) => {
    dispatch({
      type: "GET_EXIF_START"
    });
    request({
      method: "flickr.photos.getExif",
      param: {
        photo_id: id,
        secret,
        url
      }
    })
      .then(({ stat, photo, message }) => {
        if (stat === "ok") {
          dispatch({
            type: "GET_EXIF_SUCCESS",
            data: photo
          });
        } else {
          dispatch({
            type: "GET_EXIF_FAIL",
            error: {
              msg: message
            }
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: "GET_EXIT_FAIL",
          error
        });
      });
  }
};
