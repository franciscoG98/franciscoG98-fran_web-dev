import React from "react";
import "./formStyles.css";
import emailjs from "emailjs-com";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();
    // emailJS sendForm function recibes, service id, template id, e.target (with de data from the form), and userID
    emailjs
      .sendForm(
        "service_s15e8fk",
        "template_d9yf1qi",
        e.target,
        "user_3c9CDSSosUCOHpUVhpeAg"
      )
      .then((res) => {
        console.log("response:\n", res);
      })
      .catch((err) => console.log("error:\n", err));
  }

  return (
    <div>
      <h4>FORM BITCHIE</h4>
      <form className="form_container" onSubmit={sendEmail}>
        <label className="form_label">Name</label>
        <br />
        <input className="form_input" type="text" name="name" />

        <br />

        <label className="form_label">Email</label>
        <br />
        <input className="form_input" type="email" name="user_email" />

        <br />

        <label className="form_label">Message</label>
        <br />
        <textarea className="form_input" name="message" rows="4" />

        <br />

        <input className="form_input submit_btn" type="submit" value="send" />
      </form>
    </div>
  );
};

export default Form;
