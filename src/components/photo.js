import React, { useState, useEffect } from "react";

export default function Photo({
  farm,
  server,
  id,
  secret,
  title,
  getExif,
  exif
}) {
  // const [imagesState, setImageState] = useState([]);

  const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`;
  console.log("data", exif);

  const imageChange = (pic) => {
    console.log("dataImage", pic);
    let imageDownLoad = [];
    imageDownLoad.push(pic);
    console.log("dataMatter", imageDownLoad);
  };

  const fileDownloadHandler = async (imageDownLoad) => {
    for (var i = 0; i < imageDownLoad.length; i++) {
      // console.log(imageDownLoad)
      const response = await fetch(imageDownLoad[i]);
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "picture.jpeg";
        a.click();
      });
    }
  };

  // const download = (e) => {
  //   console.log(e.target.href);
  //   fetch(e.target.href, {
  //     method: "GET",
  //     headers: {}
  //   })
  //     .then((response) => {
  //       response.arrayBuffer().then(function (buffer) {
  //         const data = window.URL.createObjectURL(new Blob([buffer]));
  //         const link = document.createElement("a");
  //         link.href = data;
  //         link.setAttribute("download", "image.jpeg"); //or any other extension
  //         document.body.appendChild(link);
  //         link.click();
  //       });
  //     })
  //     .catch((err) => {
  //       alert("DownLoad Faild");
  //     });

  // };

  // const cancelData = () => {
  // document.getElementById("myDIV").style.display = "none";
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
        <input type="checkbox" onChange={() => imageChange(url)} />
      </div>
      <button onClick={fileDownloadHandler}>DownLoad </button>
    </div>
  );
}
