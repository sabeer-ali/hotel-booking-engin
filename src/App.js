import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./App.css";
import {
  faPlus,
  faMinus,
  faCalendar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import RoomDetailsPage from "./pages/RoomPageDetails/RoomDetailsPage";
import ExtraFeturesPage from "./pages/ExtraFeturesPage/ExtraFeturesPage";
import SubmittingPage from "./pages/SubmittingPage/SubmittingPage";

const CustomDatePicker = ({ setDateRanges }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateRanges({ start, end });
  };

  return (
    <div className="col col-auto align-self-center CommonContainer">
      {/* <FontAwesomeIcon icon={faCalendarAlt} className="align-self-center" /> */}
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        selectsRange
        todayButton={"Today"}
        customInput={
          <input
            type="email"
            className="form-control w-100 me-2 pointer "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        }
      />
    </div>
  );
};

const DropdownList = ({ index, number, parentData }) => {
  const [numberList, setNumberList] = useState([]);

  React.useEffect(() => {
    generateNumAndData();
  }, [number]);

  const generateNumAndData = () => {
    let tmp = [];
    for (let i = 0; i < number; i++) {
      tmp.push({
        value: i,
        isDropdown: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        age: 0,
      });
    }
    setNumberList(tmp);
  };

  const handleAgeSelection = (listIndex, itemIndex, age) => {
    let tempNumList = [...numberList];
    tempNumList[listIndex].age = age;
    tempNumList[listIndex].isDropdown = !tempNumList[listIndex].isDropdown;
    setNumberList(tempNumList);
    parentData(index, tempNumList);
  };

  const handleDropdown = (index) => {
    let tempNumberList = [...numberList];
    tempNumberList.map((list, listIndex) => {
      if (listIndex !== index) {
        list.isDropdown = false;
      }
    });
    tempNumberList[index].isDropdown = !tempNumberList[index].isDropdown;
    setNumberList(tempNumberList);
  };

  return (
    <div className="row">
      {numberList.map((item, index) => {
        return (
          <div className="col-auto" key={index}>
            <button
              className="btn border bg-white"
              onClick={() => handleDropdown(index)}
            >
              {item.age}
            </button>
            {item.isDropdown ? (
              <div className="bg-success" style={{ position: "absolute" }}>
                {item.list.map((list, indexs) => {
                  return (
                    <button
                      className="row border-0 border-bottom"
                      key={indexs}
                      style={{ width: 45 }}
                      onClick={() => handleAgeSelection(index, indexs, list)}
                    >
                      <span className="p-2">{list}</span>
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

const Modal = ({ closeModal, setPopupData, setResultData }) => {
  const [data, setData] = useState([
    {
      adults: 2,
      childrens: 0,
    },
  ]);

  React.useEffect(() => {
    setResultData(data);
  }, [data]);

  const setManageData = (data) => {
    setData(data);
    resultData(data);
  };

  const resultData = (data) => {
    let tmp = [...data];
    let rooms = tmp.length;
    let adults = 0;
    let childrens = 0;

    for (let i = 0; i < tmp.length; i++) {
      adults = adults + tmp[i].adults;
      childrens = childrens + tmp[i].childrens;
    }
    setPopupData({ rooms, adults, childrens });
  };

  const addRoom = () => {
    let tempArr = [...data];
    tempArr.push({
      adults: 2,
      childrens: 0,
    });
    setManageData(tempArr);
  };

  const manageData = (index, type, field) => {
    let localData = [...data];

    if (field === "adult") {
      if (type === "inc") {
        localData[index].adults = localData[index].adults + 1;
      } else {
        if (localData[index].adults > 1) {
          localData[index].adults = localData[index].adults - 1;
        }
      }
    } else {
      if (type === "inc") {
        localData[index].childrens = localData[index].childrens + 1;
      } else {
        if (localData[index].childrens > 0) {
          localData[index].childrens = localData[index].childrens - 1;
        }
      }
    }
    setManageData(localData);
  };

  const handleRemove = (index) => {
    let localData = [...data];
    localData.splice(index, 1);
    setManageData(localData);
  };

  const addChildrensAge = (index, data1) => {
    let localData = [...data];
    let temp = [];
    data1.map((item) => {
      temp.push({ value: item.value, age: item.age });
    });
    localData[index].childrens_details = temp;
    setManageData(localData);
  };

  return (
    <main
      className="border rounded p-3"
      style={{ position: "absolute", top: 80 }}
    >
      <div style={{ width: 350 }} className="">
        <div style={{ overflow: "auto", maxHeight: 500 }} className="mx-0 px-0">
          {data.map((item, index) => {
            return (
              <div key={index} className="row mx-0 px-0 mb-3">
                <div className="row pb-3 align-items-center">
                  <span className="col">Room {index + 1}</span>
                  {data.length > 1 ? (
                    <span
                      className="col pointer text-end text-gold fs-7 fw-bolder align-self-center"
                      onClick={() => handleRemove(index)}
                    >
                      {data.length > 1 ? "Remove" : ""}
                    </span>
                  ) : null}
                  <span className="border-bottom py-1"></span>
                </div>

                <div className="row mx-0 px-0">
                  <div className="row my-3 mx-0 px-0">
                    <div className="col">
                      <span>Adults</span>
                    </div>

                    <div className="col">
                      <button
                        className="col rounded-circle bg-gold-border"
                        onClick={() => manageData(index, "dcr", "adult")}
                      >
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="color-gold"
                        />
                      </button>
                      <span className="col px-3 text-center fs-6 fw-bolder">
                        {item.adults}
                      </span>
                      <button
                        className="col rounded-circle bg-gold-border"
                        onClick={() => manageData(index, "inc", "adult")}
                      >
                        <FontAwesomeIcon icon={faPlus} className="color-gold" />
                      </button>
                    </div>
                  </div>

                  <div className="row my-3 pb-2 mx-0 px-0">
                    <div className="col">
                      <span>Childrens</span>
                    </div>
                    <div className="col">
                      <button
                        className="col rounded-circle bg-gold-border"
                        onClick={() => manageData(index, "dcr", "child")}
                      >
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="color-gold"
                        />
                      </button>
                      <span className="px-3 fs-6 fw-bolder">
                        {item.childrens}
                      </span>
                      <button
                        className="col rounded-circle bg-gold-border"
                        onClick={() => manageData(index, "inc", "child")}
                      >
                        <FontAwesomeIcon icon={faPlus} className="color-gold" />
                      </button>
                    </div>
                  </div>
                  {item.childrens > 0 ? (
                    <div className="bg-light-grey py-3 w-90">
                      <h6 className="fs-7">Children ages at checkout</h6>
                      <DropdownList
                        index={index}
                        number={item.childrens}
                        parentData={addChildrensAge}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between border">
          <button className="btn border-0 text-gold" onClick={() => addRoom()}>
            Add Rooms
          </button>
          <button
            className="btn border shadow-sm bg-body rounded"
            onClick={() => closeModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </main>
  );
};

const AddableRooms = ({ setResultData }) => {
  const [isPopup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    rooms: 1,
    adults: 2,
    childrens: 0,
  });

  const handlePopup = (value) => {
    if (value === undefined) {
      setPopup(!isPopup);
    } else {
      setPopup(value);
    }
  };

  return (
    <main className="col CommonContainer">
      <span
        className="col CommonContainer bg-white pointer"
        onClick={() => handlePopup()}
      >
        {popupData.rooms} Room {popupData.adults} Adults {popupData.childrens}{" "}
        Childrens
      </span>
      {isPopup ? (
        <Modal
          closeModal={() => handlePopup()}
          setPopupData={setPopupData}
          setResultData={setResultData}
        />
      ) : null}
    </main>
  );
};

const PromotionalCode = () => {
  return (
    <div className="col input-group CommonContainer">
      <input
        type="text"
        placeholder="Promotion Code"
        className="form-control "
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
};

const Home = () => {
  const history = useHistory();
  const [resultData, setResultData] = useState(null);
  const [dateRanges, setDateRanges] = useState("");

  return (
    <main className="row col-12 align-self-center d-flex justify-content-center ">
      <div className="row col-9 align-items-center h-100px base-color rounded ">
        <CustomDatePicker setDateRanges={setDateRanges} />
        <AddableRooms setResultData={setResultData} />
        <PromotionalCode />
        <div className="col CommonContainer">
          <span
            className="btn bg-primary w-50 bg-gold fw-bolder"
            onClick={() =>
              history.push({
                pathname: "/booking",
                state: { data: resultData, dateRange: dateRanges },
              })
            }
          >
            Book
          </span>
          {/* <Link
            to={"/booking"}
            className="btn bg-primary w-50 bg-gold fw-bolder"
          >  */}
        </div>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/booking" component={RoomDetailsPage} />
        <Route exact path="/booking-step-2" component={ExtraFeturesPage} />
        <Route exact path="/booking-submit" component={SubmittingPage} />
      </Switch>
    </Router>
  );
};

export default App;
