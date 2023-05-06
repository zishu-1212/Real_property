import React, { useState } from "react";
import "./dash.css";
function AddProperty() {
  const [showExtraFields, setShowExtraFields] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOptionChange = (e) => {
    if (e.target.value === "showExtraFields") {
      setShowExtraFields(true);
    } else {
      setShowExtraFields(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", {
      email,
      password,
      confirmPassword,
    });
  };
  return (
    <>
      <h2 className="fw-bold">Add a Property</h2>

      <div className="ps-1 ps-md-3">
        <>
          <h4 className="mt-4">General Information :</h4>
          <p
            className="fw-bold mt-5 m-0 p-0 mb-1"
            style={{ fontSize: "13px", gap: "20px" }}
          >
            Property For * :
          </p>
          <div className="d-flex" style={{ gap: "15px" }}>
            <button className="btn sale_btn px-5">Sale</button>
            <button className="btn sale_btn px-5">Rent</button>
          </div>
        </>
        <>
          <p
            className="fw-bold mt-3 m-0 p-0 mb-1"
            style={{ fontSize: "13px", gap: "20px" }}
          >
            Type
          </p>
          <div className="d-flex " style={{ gap: "15px", flexWrap: "wrap" }}>
            <button className="btn sale_btn px-5">Warehouses</button>
            <button className="btn sale_btn px-5">Factories</button>
            <button className="btn sale_btn px-5">Farmhouses</button>
          </div>
        </>
        <>
          <p
            className="fw-bold mt-3 m-0 p-0 mb-1"
            style={{ fontSize: "13px", gap: "20px" }}
          >
            City: *
          </p>
          <div className="w_25 d-flex" style={{ gap: "10px" }}>
            <select
              style={{ height: "37px" }}
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-md example"
            >
              <option selected>City</option>
              <option value="1">Band Rd</option>
              <option value="2">Jaranwala Rd</option>
              <option value="3">Shaikhupura Rd</option>
              <option value="4">Multan Rd</option>
            </select>
          </div>
        </>
        <>
          <p
            className="fw-bold mt-3 m-0 p-0 mb-1"
            style={{ fontSize: "13px", gap: "20px" }}
          >
            Location
          </p>

          <div className="">
            <input
              className="w_25 py-1 form-control shadow-none"
              placeholder="Enter Location/Town"
              type="text"
              name=""
              id=""
            />
          </div>
        </>
        <hr />
        <div>
          <h4 className="mt-3">Property Details :</h4>
          <>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="fw-bold mt-3 m-0 p-0 mb-1"
                style={{ fontSize: "13px" }}
              >
                Title
              </label>
              <input
                type="email"
                className="shadow-none form-control w_50"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="fw-bold mt-3 m-0  p-0 mb-1"
                style={{ fontSize: "13px" }}
              >
                Textarea
              </label>
              <textarea
                className="form-control shadow-none w_50"
                id="exampleFormControlTextarea1 "
                rows={5}
                defaultValue={""}
              />
            </div>
          </>
        </div>

        <hr />
        <>
          <h4 className="mt-4">Property Images :</h4>
          <div className="">
            <span className="btn border ">Photos (0)</span>
          </div>
          <div className="text-center">
            <input type="file" id="upload" hidden />
            <label id="lable" for="upload">
              Click for upload image
            </label>
          </div>
        </>
        <hr />
        <>
          <form onSubmit={handleSubmit}>
            <div
              className="d-flex mt-4"
              style={{ gap: "12px", flexWrap: "wrap" }}
            >
              <h4 className="">Property Images :</h4>
              <span
                className="d-flex mt-1"
                style={{ gap: "12px", flexWrap: "wrap" }}
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    value="showEmailPassword"
                    checked={!showExtraFields}
                    onChange={handleOptionChange}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    value="showExtraFields"
                    checked={showExtraFields}
                    onChange={handleOptionChange}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-labe2" for="flexRadioDefault2">
                    Default radio
                  </label>
                </div>
              </span>
            </div>

            <div>
              <label
                className="fw-bold mt-3 m-0  p-0 mb-1"
                style={{ fontSize: "13px" }}
              >
                {" "}
                Email:{" "}
              </label>
              <br />

              <input
                className="w_50 shadow-none form-control"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label
                className="fw-bold mt-3 m-0  p-0 mb-1"
                style={{ fontSize: "13px" }}
              >
                Password:{" "}
              </label>
              <br />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w_50 shadow-none form-control"
              />
            </div>
            {showExtraFields && (
              <>
                <div>
                  <label
                    className="fw-bold mt-3 m-0  p-0 mb-1"
                    style={{ fontSize: "13px" }}
                  >
                    Full Name:{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w_50 shadow-none form-control"
                  />
                </div>
                {/* <div>
            <label>
              Confirm Password: </label><br/>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
           
          </div> */}

                <div>
                  <label
                    className="fw-bold mt-3 m-0  p-0 mb-1"
                    style={{ fontSize: "13px" }}
                  >
                    Phone Number:{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w_50 shadow-none form-control"
                  />
                </div>

                <div className="d-flex mt-4" style={{ gap: "15px" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault1"
                    >
                      Individual
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked2"
                    >
                      Agent
                    </label>
                  </div>
                </div>

                <div className="">
                  <div
                    className="form-check d-flex justify-content-center"
                    style={{ gap: "8px" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked4"
                    >
                      By logging in, you agree to realproperty terms & conditons
                    </label>
                  </div>
                </div>
              </>
            )}
            <div>
              <button className="mt-3 btn btn-color float-end" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      </div>
    </>
  );
}

export default AddProperty;
