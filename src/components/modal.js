import React from "react";

export default ({ content }) => {
  return <div style={styles.modal}>{content}</div>;
};

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "5px",
    color: "#fff",
    textAlign: "center",
    padding: "50px"
  }
};
