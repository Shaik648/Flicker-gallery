import createFetchAction from "./createFetchAction";

const flickr = {
  search: createFetchAction({
    key: "flickr.search",
    url: "https://api.flickr.com/services/rest/?method=flickr.photos.search"
  })
};
