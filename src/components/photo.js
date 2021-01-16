import React from "react";
// import Modal from "react-modal";

export default ({ farm, server, id, secret, title, getExif, exif }) => {
  const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`;
  console.log("data", exif);

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const data = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = data;
          link.setAttribute("download", "image.jpeg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        alert("DownLoad Faild");
      });
    // window.location.reload();
  };

  // const cancelData = () => {
  //   document.getElementById("myDIV").style.display = "none";
  // };

  return (
    <div>
      <div className="imgContainer">
        {/* <Modal style={customStyles} contentLabel="Example Modal"></Modal> */}

        <img
          onClick={() => getExif(id, secret, farm, url)}
          src={url}
          alt={title}
          className="img"
          title={title}
        />

        {exif ? (
          <div id="myDIV" className="exIf" style={{ display: "flex" }}>
            <div className="exif" id="downLoad">
              <a href={url} target="#" download onClick={(e) => download(e)}>
                Download
              </a>
            </div>
            {/* <div onClick={cancelData}>Cancel</div> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};
