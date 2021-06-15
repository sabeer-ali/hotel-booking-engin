import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomDropdownList = ({ number }) => {
  const [isDroppdown, setDroppdown] = useState(false);
  const [value, setValue] = useState(0);

  const handleResult = (value) => {
    setValue(value);
    setDroppdown(false);
  };

  return (
    <div className="ps-2">
      <button
        onClick={() => setDroppdown(!isDroppdown)}
        className="px-2 border-0"
      >
        {value}
      </button>
      {isDroppdown ? (
        <div style={{ position: "absolute" }}>
          {[0, 1, 2, 3, 4].map((item) => {
            return (
              <div
                className="p-2 border-bottom bg-light-grey"
                style={{ width: 25 }}
                onClick={() => handleResult(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const OfferDetails = () => {
  return (
    <div className="">
      <div className="col me-5">
        <div className="row col-12 border m-0 p-0 w-100">
          <div className="col-4">
            <img src="https://images.mirai.com/EXTRAS%2FSHARED%2FSPA%2FHot_stones2%20-%20EXTRAS_1480593279100.jpg" />
          </div>
          <div className="col-8">
            <h5>30 Minutes Back Massage</h5>
            <h6>22% Special website discount</h6>
            <p>
              Focusing on the back, neck & shoulder areas this treatment will
              loosen the muscles tension allowing your body to unwind, get rid
              of stiffness and promote deep relaxation. For more treatment
              massage, kindly contact our Spa upon arrival.
            </p>
          </div>
        </div>

        <div className="row bg-light-grey py-4 mx-0 mb-4">
          <div className="col d-flex justify-content-center align-items-center">
            <span>For</span>
            <CustomDropdownList number={4} data={""} />
          </div>

          <div className="row col">
            <div className="col align-self-center">
              <span className="text-success">₹3,269.69</span>
            </div>
            <div className="col">
              <button className="btn bg-white w-75">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const OverViewDetails = () => {
  return (
    <div className=" w-75">
      <div className="border p-3 rounded">
        <h5 className="py-1">Total</h5>
        <h6 className="py-1 text-success">₹107,899.79</h6>
        <div className="py-3">
          <button className="btn border w-100 bg-white">
            <Link
              to="/booking-submit"
              className="text-gold text-decoration-none"
            >
              Continue
            </Link>
          </button>
        </div>
        <div className="row">
          <p>1 room for 30 nights </p>
          <h5>Standard Triple Room</h5>
          <p>
            <ul>
              <li>3 adults + 1 child</li>
              <li>More than 20 nights offer</li>
              <li>Room only</li>
            </ul>
          </p>
        </div>
        <div>
          <span className="fs-6 text-success">₹107,970.66</span> |{" "}
          <span className="text-gold fw-bolder">Edit</span>
        </div>
      </div>
    </div>
  );
};

const ExtraFeturesPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row col-8">
        <div className="row col-8">
          {[1, 2].map((item) => {
            return <OfferDetails />;
          })}
        </div>

        <div className="row col-4 bg-danger">
          <OverViewDetails />
        </div>
      </div>
    </div>
  );
};

export default ExtraFeturesPage;
