import React, { Component } from "react";
import { connect } from "react-redux";

import init from "./actions";
import flickr from "./actions/flickr";

import Photo from "./components/photo";
import Modal from "./components/modal";

class App extends Component {
  render() {
    const {
      loading,
      msg,
      photos,
      getExif,
      popLoading,
      exif,
      search
    } = this.props;
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (msg) {
      return <div className="error">{msg}</div>;
    }

    return (
      <div className="App">
        <h1 style={{ color: "lightGreen", textAlign: "center" }}>
          Photo Gallery{" "}
        </h1>
        <input
          className="search-input"
          type="text"
          placeholder="Ex:- Animals,Things"
          onChange={(e) => {
            this.setState({
              keyword: e.target.value
            });
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              this.state.keyword && search(this.state.keyword);
              alert("Please Click On Image to get Download Option");
            }
          }}
        />
        <div className="images">
          {photos ? (
            photos.photo.map((photo) => {
              return (
                <div>
                  <Photo {...photo} getExif={getExif} exif={exif[photo.id]} />
                </div>
              );
            })
          ) : (
            <p style={{ color: "red" }}>
              Hint :- Please Enter Correct Data or Related Images are Not Found{" "}
            </p>
          )}
        </div>
        {(popLoading || loading) && <Modal content="loading..." />}
      </div>
    );
  }
}

const mapStateToProps = ({ flickr }) => flickr;

export default connect(mapStateToProps, {
  init,
  search: flickr.search,
  getExif: flickr.getExif
})(App);
