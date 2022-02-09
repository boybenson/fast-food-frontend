import React from "react";
import { RotateSpinner } from "react-spinners-kit";

const Loader = () => {
  return (
    <section>
      <div
        style={{ height: "300px" }}
        className="flex justify-center items-center"
      >
        <RotateSpinner size={45} color="red" />
      </div>
    </section>
  );
};

export default Loader;
