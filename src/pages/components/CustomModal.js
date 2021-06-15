import moment from "moment";
import React, { useState } from "react";
import { Modal, Tabs, Tab } from "react-bootstrap";

const CustomModal = ({ show, handleClose, type, data, dateList }) => {
  const [key, setKey] = useState("home");
  const [dateArrList, setDateArrList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  React.useEffect(() => {
    if (dateList) {
      const a = moment(dateList.start);
      const b = moment(dateList.end);

      let totaltAmount = 0;

      const dateArr = enumerateDaysBetweenDates(a, b);
      let temp = [];
      for (let i = 0; i < dateArr.length; i++) {
        temp.push({ date: dateArr[i], roomType: "Room Only", amount: 3500 });
      }

      if (temp.length) {
        for (let j = 0; j < temp.length; j++) {
          totaltAmount = totaltAmount + temp[j].amount;
        }
        setTotalAmount(totaltAmount);
      }

      setDateArrList(temp);
    }
  }, [dateList]);

  const enumerateDaysBetweenDates = (startDate, endDate) => {
    let dates = [];
    let currDate = moment(startDate).startOf("day");
    let lastDate = moment(endDate).startOf("day");
    while (currDate.add(1, "days").diff(lastDate) < 0) {
      dates.push(moment(currDate.clone().toDate()).format("ddd, DD MMM YYYY"));
    }
    return dates;
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      {type === 1 ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Standard Triple Room</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <div style={{ overflow: "auto", maxHeight: 200 }}>
                <table class="table m-0 p-0">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {dateArrList.length
                      ? dateArrList.map((item) => {
                          return (
                            <tr>
                              <td>{item.date}</td>
                              <td>{item.roomType}</td>
                              <td>₹{item.amount}</td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
              <div className="row pb-4">
                <div className="d-flex justify-content-end">
                  <span className="fs-3">Total </span>
                  <span className="fs-3 ps-2 text-success fw-bold">
                    ₹
                    {totalAmount.toString().length == 5
                      ? `${
                          totalAmount.toString().substring(0, 2) +
                          "," +
                          totalAmount.toString().substring(2)
                        }`
                      : totalAmount}
                  </span>
                </div>
                <div className="d-flex justify-content-end">per room</div>
              </div>

              <div className="row w-100 p-1 m-0 rounded bg-light-grey">
                <div className="row col-12 py-2">
                  <div className="col-3">Payment</div>
                  <div className="col">According to special agreement</div>
                </div>
                <div className="row py-3">
                  <div className="col-3">Cancellation Policy</div>
                  <div className="col ">
                    <p className="fw-bolder">
                      Cancellation with no penalty up to some hours before
                    </p>
                    <p className="">
                      arrival. No credit card guarantee. You can cancel your
                      reservation free of charge until the day of your arrival
                      and pay directly at the hotel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{data.room_title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Tabs
              id="controlled-tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title="Description">
                <p className="mt-5">{data.room_details.description}</p>
                <p>
                  Room size:
                  <span className="fw-bolder">
                    {data.room_details.room_size}
                  </span>
                </p>
                <p>Different compositions:</p>
              </Tab>
              <Tab eventKey="amenities" title="Amenities">
                <div className="row mt-5 room-details-modal">
                  <div className="col">
                    <ul>
                      {data.amenities.length
                        ? data.amenities.map((item) => {
                            return <li>{item}</li>;
                          })
                        : null}
                    </ul>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
