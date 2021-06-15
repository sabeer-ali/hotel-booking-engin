import React from "react";

const CommonImages = ({ src, tooltip }) => {
  return (
    <main className="col-auto p-1 ">
      <img
        src={src}
        alt=""
        className="col-auto border rounded bg-white rounded-circle p-1"
        style={{ width: 50 }}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={tooltip}
      />
    </main>
  );
};

export default CommonImages;
