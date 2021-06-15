import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApiRoomData from "../../mocupdata/roomDetails.json";
import moment from "moment";

import ImageIconsCollections from "../components/ImageIconsCollections";
import CustomModal from "../components/CustomModal";

const SliderImages = ({ apiData }) => {
  return (
    <div className="col-3">
      <img
        src={apiData.image}
        alt=""
        className="img-thumbnail"
        style={{ width: 300, height: 200 }}
      />
    </div>
  );
};

const HotelDetails = ({ show, handleClose, handleShow, apiData }) => {
  return (
    <div className="col-9">
      <h4 className="">{apiData.room_title}</h4>
      <h5>{apiData.room_type}</h5>
      <ImageIconsCollections data={apiData.amenities} />
      <h6 className="py-4">
        {`${apiData.room_details.description.substring(0, 120)}...`}
      </h6>
      <span className="">
        <FontAwesomeIcon
          icon={faPlus}
          className="color-gold fs-7 rounded-circle"
        />
      </span>
      <span className="text-gold ps-2 pointer" onClick={() => handleShow()}>
        Room details
      </span>
      <CustomModal
        show={show}
        handleClose={handleClose}
        type={0}
        data={apiData}
      />
    </div>
  );
};

const HotelInternalDetails = ({ apiData }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row col-12 bg-white m-0 border py-5">
      <SliderImages apiData={apiData} />
      <HotelDetails
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        apiData={apiData}
      />
    </div>
  );
};

const RoomRateSelection = () => {
  return (
    <>
      <div class="py-2 form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Room only
        </label>
      </div>

      <div class="form-check py-2 ">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Breakfast included +₹1,961.81
        </label>
      </div>

      <div class="form-check py-2 ">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault3">
          Half Board (breakfast and dinner) +₹5,068.02
        </label>
      </div>

      <div class="form-check py-2 ">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
        />
        <label class="form-check-label" for="flexRadioDefault4">
          Full Board ( breakfast,lunch and dinner ) +₹8,010.74
        </label>
      </div>
    </>
  );
};

const TotalRatingSection = () => {
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div className=" col-8 ">
        <div className="text-decoration-line-through">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          />
          <span className="text-secondary">₹4,386.17</span>
        </div>
        <div className="text-success fs-4">₹3,596.66</div>
        <div>
          <span className="text-secondary">30 nights = ₹107,899.79</span>
        </div>
      </div>
      <div className="col col-4">
        <button className="btn bg-white">
          <Link
            to={"/booking-step-2"}
            className="text-secondary"
            style={{ textDecoration: "none" }}
          >
            Select
          </Link>
        </button>
      </div>
    </div>
  );
};

const HotelRatingDetails = ({ dateList, apiData }) => {
  const [show, setShow] = React.useState(false);
  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const a = moment(dateList.end);
  const b = moment(dateList.start);
  const days = a.diff(b, "days");

  return (
    <div className="row py-2 rounded m-0 p-0">
      <div className="col pt-4">
        <div className="row">
          <h6>More than {days + 1} nights offer</h6>
        </div>
        <div className="row">
          <h6 className="text-success fs-6">
            Free cancellation until {moment().add(1, "days").format("MMM DD")}
          </h6>
        </div>
        <div className="text-gold ps-2 pointer" onClick={() => handleShow1()}>
          <FontAwesomeIcon icon={faPlus} className="fs-7 rounded-circle pe-1" />
          Rate details
        </div>
        <CustomModal
          show={show}
          handleClose={handleClose1}
          type={1}
          data={apiData}
          dateList={dateList}
        />
      </div>

      <div className="col py-4">
        <RoomRateSelection />
      </div>
      <div className="col">
        <TotalRatingSection />
      </div>
    </div>
  );
};

const RoomMainDetails = ({ apiData, dateList }) => {
  return (
    <main className="container row w-100 p-0 m-0 bg-gold col-8 rounded">
      <div className="p-0 shadow rounded">
        <HotelInternalDetails apiData={apiData} />
        <HotelRatingDetails dateList={dateList} apiData={apiData} />
      </div>
    </main>
  );
};

const RoomDetailsPage = (props) => {
  console.log("PROPS ====> ", props.location.state);
  // console.log("API ====> ", ApiRoomData.data);
  const [apiData, setApiData] = useState([]);

  React.useEffect(() => {
    generateData(0);
  }, []);

  const generateData = () => {
    let tempData = props.location.state.data;
    let tempApiData = ApiRoomData.data;
    let roomTypes = tempData.map((item) => item.adults);
    let result = [];

    for (let i = 0; i < roomTypes.length; i++) {
      for (let j = 0; j < tempApiData.length; j++) {
        if (roomTypes[i] === tempApiData[j].adults) {
          result.push(tempApiData[j]);
        }
      }
    }

    setApiData(result);
  };

  return (
    <main className="row m-0 p-0">
      {apiData.length
        ? apiData.map((item) => {
            return (
              <div className="d-flex justify-content-center mb-5 ">
                <RoomMainDetails
                  apiData={item}
                  dateList={props.location.state.dateRange}
                />
              </div>
            );
          })
        : null}
    </main>
  );
};

export default RoomDetailsPage;
