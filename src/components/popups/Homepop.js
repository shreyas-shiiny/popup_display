import React, { useState } from "react";
import helper from "../../Helper/Index";

const Homepop = ({ setIsBlur }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [StudentData, setStudentData] = useState({});
  const [state, setState] = useState(false);

  const handleChange = (e) => {
    setError(null);
    setSuccess(null);
    setStudentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("setIsBlur:", setIsBlur);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isinvalid = false;
    console.log(StudentData);

    if (!helper.validateemail(StudentData.email)) {
      isinvalid = true;
      setError("invalid email");
      return;
    }

    if (!helper.validatePhoneNumber(StudentData.PhoneNumber)) {
      isinvalid = true;
      setError("invalid PhoneNumber");
      return;
    }


    setSuccess("user created successfully");
    setStudentData({});
    setError(null);
    setState(!state);
  };

  const handleCancel = (e) => {
    setIsBlur(false);
    document.getElementById("home-pop").style.display = "none";
  };
  React.useEffect(() => {
    setStudentData({});
  }, [state]);

  return (
    <>
      <div id="home-pop">
        <div className="hoo">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={StudentData?.name}
            onChange={(e) => handleChange(e)}
          />
          {/* <span>{StudentData?.name}</span> */}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={StudentData?.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label htmlFor="education">education</label>
          <select
            name="education"
            onChange={(e) => handleChange(e)}
            value={StudentData?.education}
          >
            <option value=""> education</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
            <option value="other">Other</option>
          </select>{" "}
          <br />
          <input
            type="tel"
            name="PhoneNumber"
            placeholder="PhoneNumber"
            value={StudentData?.PhoneNumber}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {error && <div className="err">{error}</div>}
          {success && <div className="suss">{success}</div>}
          <br></br>
          <button className="btn-sub" onClick={handleSubmit}>
            SUBMIT
          </button>
          <button className="btn-can" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepop;
