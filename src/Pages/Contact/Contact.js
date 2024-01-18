import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="vvv">
        Contact Us
        <div id="ddd">
          <h5>
            Email: Nis@222gmail.com
            <br></br>
            Contact Number : 7457859622
          </h5>
        </div>
      </h2>
      <h3 id="contact-desc">Join Our team</h3>

      <table>
        <tr>
          <td>
            <th>Name :-</th>
          </td>
          <td>
            <input type="name" placeholder="enter your name" name="name" />
          </td>
        </tr>
        <tr>
          <td>
            <th>Email:- :-</th>
          </td>
          <td>
            <input type="email" placeholder="enter your email" name="emai" />
          </td>
        </tr>
        <tr>
          <td>
            <th>Phone Number :-</th>
          </td>
          <td>
            <input
              type="number"
              placeholder="enter your number"
              name="number"
            />
          </td>
        </tr>
        <tr>
          <td>
            <th>Adress :-</th>
          </td>
          <td>
            <input type="text" placeholder="enter your address" name="adress" />
          </td>
        </tr>
      </table>
      <button className="sss">
        <b>submit</b>
      </button>
    </div>
  );
};

export default Contact;
