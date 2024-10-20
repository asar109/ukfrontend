import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IELTSResults = () => {
  const [formData, setFormData] = useState({
    givenName: "",
    surname: "",
    dateOfBirth: "",
    passportNumber: "",
  });
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [error, setError] = useState("");
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `https://uk-backend-oulb.onrender.com/api/results/${formData.passportNumber}`
      );
      if (response.ok) {
        const data = await response.json();
        navigate("/detail", { state: { result: data } });
      } else {
        setError("Hi there,\n\nWe are not able to display your results at the moment.\n\nThis could be because:\n\n- Results are still being confirmed. Some results may still be in the process of being confirmed. Please try again in an hour.\n- Your details do not match our records. To fix this, please make sure your details are correct as per your IELTS application form.\n\nIf you have checked and your details are correct, and you have waited for more than one day and you still cannot see your results, please contact your test centre team who can help you with your query.\n\nKind regards,\nIDP IELTS");
        setShowModal(true);
      }
    } catch (err) {
      setError("Hi there,\n\nWe are not able to display your results at the moment.\n\nThis could be because:\n\n- Results are still being confirmed. Some results may still be in the process of being confirmed. Please try again in an hour.\n- Your details do not match our records. To fix this, please make sure your details are correct as per your IELTS application form.\n\nIf you have checked and your details are correct, and you have waited for more than one day and you still cannot see your results, please contact your test centre team who can help you with your query.\n\nKind regards,\nIDP IELTS");
      setShowModal(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      givenName: "",
      surname: "",
      dateOfBirth: "",
      passportNumber: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cookieAcceptanceSection = (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
        transform: showCookieBanner ? "translateY(0)" : "translateY(100%)",
        opacity: showCookieBanner ? 1 : 0,
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setShowCookieBanner(false)}
      >
        X
      </button>
      <p>We value your privacy.</p>
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <p>
        We use cookies on this site to improve your browsing experience, analyse individualised usage and website traffic, tailor content to your preferences, and make your interactions with our website more meaningful. To learn more about the cookies we use please read our Cookie Policy. By clicking "Accept and Proceed", closing this banner, or continuing to browse this site, you consent to the use of cookies.
      </p>
      <button
        style={{
          backgroundColor: "#e31837",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => setCookieAccepted(true)}
      >
        Accept and Proceed
      </button>
    </div>
  );

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    width: "90%",
    maxWidth: "500px",
    textAlign: "center"
  };

  const modalCloseButton = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#e31837",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
   
   <>
    <img
  src="./bg.png"
  alt="IELTS Logo"
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '70%',
    height: '90%',
    zIndex: -1,
  }}
/>
  <div
      style={{
        width: "90%",
        maxWidth: "600px",
        margin: "50px auto",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {!cookieAccepted && cookieAcceptanceSection}
      {showModal && (
        <div style={modalStyle}>
          <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>Hi there,</h3>
          <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>{error}</p>
          <button style={modalCloseButton} onClick={handleCloseModal}>
            Close
          </button>
        </div>
      )}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src="https://image.ielts.idp.com/IELTS_Website_Rebrand/assets/home/idp_ielts_logo.svg"
          alt="IELTS Logo"
          style={{
            width: "150px",
          }}
        />
      </div>

      <h1
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          fontFamily: "proxima-nova-bold, sans-serif",
          marginBottom: "20px",
          marginTop: "15px"
        }}
      >
        Get your IELTS results
      </h1>

      <p
        style={{
          marginBottom: "20px",
          fontFamily: "opensans-regular, sans-serif"
        }}
      >
        Your results available online are not official. They are provisional only
        until you receive your official Test Report Form (TRF).
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <label htmlFor="givenName" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}></label>
          <input type="text" id="givenName" name="givenName" placeholder="Given Name"  value={formData.givenName} onChange={handleChange} required  style={{
            width: "100%",
            padding: "10px",
            height: "40px",
          }} />
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <label htmlFor="surname" style={{ display: "block", marginBottom: "15px", fontWeight: "bold" }}></label>
          <input type="text" id="surname" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required  style={{
            width: "100%",
            padding: "10px",
            height: "40px",
          }}/>
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <label htmlFor="dateOfBirth" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}></label>
          <input type="text" id="dateOfBirth" name="dateOfBirth" placeholder="Date of birth"  value={formData.dateOfBirth} onChange={handleChange} required   style={{
            width: "100%",
            padding: "10px",
            height: "40px",
          }}/>
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <label htmlFor="passportNumber" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}></label>
          <input   type="text" id="passportNumber" name="passportNumber" placeholder="Passport number or ID number" value={formData.passportNumber} onChange={handleChange} required  style={{
            width: "100%",
            padding: "10px",
            height: "40px",
          }} />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#e31837",
            color: "#fff",
            padding: "15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "10px"
          }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          style={{
            backgroundColor: "#ccc",
            color: "#333",
            padding: "15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Cancel
        </button>
        <br/>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <img
            src="https://image.ielts.idp.com/IELTS_Website_Rebrand/assets/home/multi-share-holders.svg"
            alt="Shareholders"
            style={{
              width: "100%",
              maxWidth: "300px",
              marginLeft:"7pc"
            }}
          />
          <p
            style={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "opensans-regular, sans-serif",
              color: "#666",
            }}
          >
            IELTS is jointly owned by the British Council; IDP IELTS; and Cambridge University Press & Assessment
          </p>
        </div>
      </form>
    </div>
   </>
  );
};

export default IELTSResults;
