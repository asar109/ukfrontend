import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Detail = () => {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <div>No result found</div>;
  }

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
      <div className="result-container p-8 mx-auto mt-50 md:mt-20 md:w-4/5 lg:w-3/5">
        <div className="header-container relative mb-8">
          <img
            src="https://image.ielts.idp.com/IELTS_Website_Rebrand/assets/home/idp_ielts_logo.svg"
            alt="IELTS Logo"
            className="ielts-logo "
          />
        </div>
        <div className="result-info p-4 md:p-9 mb-8 text-red hover:text-white">
                <h1 className="font-bold text-2xl mt-2 ">Get your IELTS results</h1> <br></br>
          <div className="info-section flex justify-between">
            <div>
              <div className="info-item">
                <strong>Candidate Name:</strong> <strong>{result.candidateName}</strong>
              </div>
              <div className="info-item">
                <strong>Centre Number:</strong> <strong>{result.centreNum}</strong>
              </div>
              <div className="info-item">
                <strong>TRF Number:</strong> <strong>{result.passport}</strong>
              </div>
            </div>
            <div>
              <div className="info-item">
                <strong>Candidate Number:</strong> 
                <span className="text-red hover:text-white"><strong>{result.candidateNum}</strong></span>
              </div>
              <div className="info-item">
                <strong>Test Date:</strong> <strong>{new Date(result.testDate).toLocaleDateString('en-US')}</strong>
              </div>
              <div className="info-item">
                <strong>Test Type:</strong> <strong>{result.testType || "IELTS General Training"}</strong>
              </div>
            </div>
          </div>
          <p className="result-note mt-6 md:mt-8">
            Your results available online are not official. They are provisional only until you receive your official Test Report Form (TRF).
          </p>
        </div>
        <div className="score-section flex justify-between gap-4 text-red">
          {['listening', 'reading', 'writing', 'speaking', 'overall'].map((category, index) => (
            <div
              key={index}
              className={`score-item text-red bg-white border border-gray-300 rounded-lg p-4 w-1/5 transition duration-300 ease-in-out hover:bg-red-700 hover:text-white text-red`}
            >
              <strong className='text-black hover:text-white'>{category.charAt(0).toUpperCase() + category.slice(1)}</strong>
              <p className="text-2xl">{result[category]}</p>
            </div>
          ))}
        </div>
        <div className="explanation-section mt-8">
          <h2 className="text-xl font-bold text-red">Your score explained</h2>
          <p className="mt-4 text-gray-700  ">
            <span>
            Test takers at this band can typically speak with ease, clearly and at length, although with some repetition, self-correction, or hesitation to search for words or grammar. Speaking is generally well-organised, and ideas are generally clear and well linked. They use a range of vocabulary to discuss a variety of topics, and can use some less common or idiomatic vocabulary, although not always accurately. They can paraphrase well if needed. They can use a range of grammar structures. Sentences are frequently accurate, although there are some errors. Pronunciation is generally natural and clear, but with occasional problems. They are usually easy to understand, and their accent does not have much effect on understanding. 
         <br></br> <br/><b>    They can paraphrase well if needed. They can use a range of grammar structures. Sentences are frequently accurate, although there are some errors. Pronunciation is generally natural and clear, but with occasional problems. They are usually easy to understand, and their accent does not have much effect on understanding. IDP has more than 2,000 test locations in over 50 countries, as well as a wide range of IELTS exam dates for your convenience. IDP gives you the freedom to choose how to take the IELTS exam; you can choose between the IELTS on Computer and the IELTS on Paper formats in any test centre located near you.</b>
<br></br>
<br></br>You can register for your IELTS test online or offline by visiting the local IDP branch. You must upload a clean colour scan or photo of your passport to do this, then use your credit card to finalise the payment.
       <br/>
        <br></br> <br></br> <b> IDP has more than 2,000 test locations in over 50 countries, as well as a wide range of IELTS exam dates for your convenience. IDP gives you the freedom to choose how to take the IELTS exam; you can choose between the IELTS on Computer and the IELTS on Paper formats in any test centre located near you. 

You can register for your IELTS test online or offline by visiting the local IDP branch. You must upload a clean colour scan or photo of your passport to do this, then use your credit card to finalise the payment. </b> </span>
         <br></br><br></br> <b>Important:</b>
         <br/> You will need to bring the same form of identity you used to register for the test to pick up your TRF. Alternatively, you can ask us to mail it to your home.

Test centres are not permitted to give results out over the phone or by scan or email.

You will receive only one paper copy of the Test Report Form. It’s important that you keep it safe as replacement Test Report Forms cannot be issued.</p>
       <br/>
        <b>Paper-based IELTS:</b>
 <br></br>       If you have taken an IELTS on paper test, your results will be available 13 days after you complete the test.

We will send you an email telling you that your results have been released. You will be able to preview your results online for 28 days but the definitive Test Report Form will be printed on paper by us. You (or somebody you designate) will have to pick up the certificate in person.
<br></br> <br></br>
<b>Computer-delivered IELTS:</b> <br></br>If you have taken an IELTS on a computer at our test center, your results will be available in 1 to 5 days after your test.

You will receive an email telling you that your results have been released. You will be able to access your results in your personal IELTS IDP portal and you will be able to download your e-TRF here</div>
      
      </div>
      <div className="footer mt-8 justify-between " style={{ background: 'red', color: 'white', width: '100%', padding: '2pc' }}>

   
 <img
className='img2'
  src="./best.png"
  alt="Multi Share Holders"

/><br/>
<div className="footer-links flex gap-4 md:ml-8 mt-4 md:mt-0">
 <b></b> <a href="/" className="footer-link">About us</a>
  <a href="/" className="footer-link">Accessibility</a>
  <a href="/" className="footer-link">Complaints</a>
  <a href="/" className="footer-link">Legal & Policies</a>
  <a href="/" className="footer-link">Sitemap</a>
</div><div className="social-links flex gap-4 md:flex-row md:gap-2 flex justify-between" style={{ marginTop: '1rem', padding: '0.3rem' }}>
<a href="/" className="social-link">
  <FaFacebookF />
</a>
<a href="/" className="social-link">
  <FaLinkedinIn />
</a>
<a href="/" className="social-link">
  <FaInstagram />
</a>
<a href="/" className="social-link">
  <FaYoutube />
</a>
</div>
<div className="copyright text-sm" style={{marginTop: "2rem", textAlign: "center"}}>
<b>© 2024. ILETS jointly by the British Council;IDP IELTS;Cambridge University Press & Assessment</b>
</div>
</div>


  





    </>
  );
};

export default Detail;
