import React from "react";

const FormSection = () => {
  return (
    <div className="col">
      <div>
        <h6>Reservation data</h6>
        <span>* All the fields are mandatory except if otherwise stated</span>
      </div>

      <div className="">
        <div className="py-3">
          <div class="input-group col-12 d-flex justify-content-between">
            <div className="col-5">
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                aria-label="Last name"
                class="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="py-3">
          <div class="input-group col-12 d-flex justify-content-between">
            <div className="col-5">
              <input
                type="text"
                aria-label="First name"
                class="form-control "
                placeholder="Email"
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                aria-label="Last name"
                class="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>

        <div class="input-group">
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="Company (Optional)"
          />
        </div>

        <h6 className="py-3">No credit card needed</h6>
        <div class="form-group py-4">
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <div className="py-3">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          <span className="ps-2">
            I would like to receive future offers and news about this
            establishment
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          <span className="ps-2">
            I accept the policy of cancellation/payment, privacy policy and
            other conditions of this reservation..
          </span>
        </div>
      </div>
    </div>
  );
};

const OverViewSection = () => {
  const type1List = [
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
    { date: "Tue 13 Jul 2021", roomType: "Room Only", amount: 3500 },
  ];
  return (
    <div className=" ps-2">
      <div className="row mb-5">
        <div className="col">
          <div>Checkin </div>
          <span>Tue, 13 Jul 2021</span>
        </div>
        <div className="col">
          <div>Checkout </div>
          <span>Tue, 13 Jul 2021</span>
        </div>
      </div>

      <div className="">
        <div>
          <span className="fs-6 fw-bold">Reservation total</span>
          <span className="fs-7 ps-1">(current conversion rate)</span>
          <h4 className="text-bg-success pt-1 text-success">₹107,970.66</h4>
          <h4>AED 6,629.70</h4>
          <span>(₹132,264.06 with taxes)</span>
        </div>

        <div className="row">
          <span className="col-auto border bg-white mt-3 ms-2 fs-7 p-2 w-75">
            With the offer you are saving AED 1,455.30
          </span>
          <span className="py-4 fs-7">
            The issuer of your card could charge you a commission for the
            currency exchange.
          </span>
        </div>

        <div>
          <div className="row">
            <div className="col-auto">
              <img src="https://images.mirai.com/INFOROOMS/100376916/F67aZhfI7gH939iUfgeV/F67aZhfI7gH939iUfgeV_medium.jpg" />
            </div>

            <div className="col-auto">
              <h6>1 room of type:</h6>
              <h4>Standard Triple Room</h4>
              <h6>3 adults + 1 child (2-12 included years)</h6>
            </div>
          </div>

          <div className="mt-5">
            <span className="">
              Standard Triple Room: More than 20 nights offer
            </span>
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
                  {type1List.map((item) => {
                    return (
                      <tr>
                        <td>{item.date}</td>
                        <td>{item.roomType}</td>
                        <td>{item.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-flex justify-content-end my-4">
            <h4>Subtotal ₹132,264.06</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubmittingPage = () => {
  return (
    <div className="row col-12 d-flex justify-content-center py-5">
      <div className="row col-7">
        <FormSection />
        <div
          className="col py-5 rounded shadow-sm"
          style={{ backgroundColor: "#d3d3d345" }}
        >
          <OverViewSection />
        </div>
      </div>
    </div>
  );
};

export default SubmittingPage;
