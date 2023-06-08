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
  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  return (
    <>
      <h2 className="fw-bold">Add a Property</h2>

      <form className="ps-1 ps-md-3">
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
                Discription
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
      <h4 className="mt-4">Property Images:</h4>
      <div className="">
        <span className="btn border">Photos (0)</span>
      </div>
      <div className="text-center">
      {selectedImage && (
        <div>
         
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
        <input type="file" id="upload" hidden onChange={handleImageUpload} />
     
        <label htmlFor="upload"  id="lable" className="mt-4">
          Click to upload image
        </label>
      </div>
    
    </>
        <hr />
        <>
         
            <div
              className=" mt-4"
              style={{ gap: "12px", flexWrap: "wrap" }}
            >
              <h4 className="">Own Detail :</h4>
              <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="fw-bold mt-3 m-0 p-0 mb-1"
                style={{ fontSize: "13px" }}
              >
              Contact No
              </label>
              <input
                type="number"
                className="shadow-none form-control w_50"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="fw-bold mt-3 m-0 p-0 mb-1"
                style={{ fontSize: "13px" }}
              >
                Address
              </label>
              <input
                type="text"
                className="shadow-none form-control w_50"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
        
              <button className="mt-3 btn btn-color float-end" type="submit">
                Submit
              </button>
            </div>
         
        </>
      </form>
    </>
  );
}

export default AddProperty;
