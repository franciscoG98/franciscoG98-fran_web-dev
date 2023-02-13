import React, { useState } from "react";
import "./formStyles.css";
import emailjs from "emailjs-com";

const Form = () => {
    const [name, setName] = useState("");
    const [userEmail, seteUserEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        // emailJS sendForm function recibes, service id, template id, e.target (with de data from the form), and public key
        emailjs
            .sendForm(
                "service_r021uvo",
                "template_aimvqjj",
                e.target,
                "-qC5fYPWWvQb0xA6J"
            )
            .then((res) => {
                console.log("response:\n", res);
                setName("");
                seteUserEmail("");
                setMessage("");
                alert("Sent!");
            })
            .catch((err) => console.log("error:\n", err));
    }

    return (
        <div>
            <form className="form_container" onSubmit={sendEmail}>
                <label className="form_label">Name</label>
                <br />
                <input
                    className="form_input"
                    required
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <br />

                <label className="form_label">Email</label>
                <br />
                <input
                    className="form_input"
                    required
                    type="email"
                    name="user_email"
                    onChange={(e) => seteUserEmail(e.target.value)}
                    value={userEmail}
                />

                <br />

                <label className="form_label">Message</label>
                <br />
                <textarea
                    className="form_input"
                    required
                    name="message"
                    rows="4"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <br />

                <input
                    className="form_input submit_btn"
                    type="submit"
                    value="send"
                />
            </form>
        </div>
    );
};

export default Form;
