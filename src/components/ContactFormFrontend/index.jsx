"use client";
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";

// npm i @emailjs/browser

const ContactFormFrontend = () => {
  const form = useRef();

  const [emailSent, SetEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {emailSent === false ? (
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.styledInput}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder=" "
              required
            />
            <label className={styles.label}>Namn</label>
            <div className={styles.line}></div>
          </div>
          <div className={styles.styledInput}>
            <input
              className={styles.input}
              type="text"
              name="phone"
              placeholder=" "
              required
            />
            <label className={styles.label}>Telefon</label>
            <div className={styles.line}></div>
          </div>
          <div className={styles.styledInput}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder=" "
              required
            />
            <label className={styles.label}>Epost</label>
            <div className={styles.line}></div>
          </div>
          <div className={styles.styledInput}>
            <textarea className={styles.textarea} name="message" required />
            <label className={styles.label}>Meddelande</label>
            <div className={styles.line}></div>
          </div>
          <div className={styles.submitContainer}>
            <input type="submit" value="Skicka" />
          </div>
        </form>
      ) : (
        <div className={styles.answareContainer}>Tack</div>
      )}
    </>
  );
};

export default ContactFormFrontend;

// Styles
/*
const StyledContactForm = styled.div`
	width: 400px;
	fieldset {
		position: relative;
	}
	form {
		position: relative;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		font-size: 16px;
		input {
			width: 100%;
			height: 35px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
		}

		label {
			color: #999;
			position: absolute;
			top: 0;
			left: 0;
			font-size: 1.2em;
			font-weight: 500;
			-webkit-transition: all 0.15s ease-in-out;
			-moz-transition: all 0.15s ease-in-out;
			transition: all 0.15s ease-in-out;
			pointer-events: none;
		}

		input[type='text']:focus ~ label {
			top: -1.6rem;
			position: absolute;
			font-size: 1em;
			-webkit-transition: all 0.15s ease-in-out;
			-moz-transition: all 0.15s ease-in-out;
			transition: all 0.15s ease-in-out;
		}
		textarea {
			max-width: 100%;
			min-width: 100%;
			width: 100%;
			max-height: 100px;
			min-height: 100px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: 2px solid rgba(0, 206, 158, 1);
			}
		}

		input[type='submit'] {
			margin-top: 2rem;
			cursor: pointer;
			background: rgb(249, 105, 14);
			color: white;
			border: none;
		}
	}
`;
*/
