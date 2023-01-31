import React, { useRef, useState } from "react";
import { Header } from "../../components/header/Header";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Alert } from "antd";
import SmallModal from "../../SmallModal";

function Contactus() {
  const form = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yqprdif",
        "template_w71jfrk",
        form.current,
        "qS4wVTnIWUz0EDSZ9"
      )
      .then(
        (result) => {
          setIsModalOpen(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Header />
      <div>
        <section class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Contact</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>
        </section>
        <section
          class="contact"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-12">
                    <div class="info-box">
                      <i style={{ color: "green" }} class="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>
                        Atlas Bole, behind Elsa Kolo, Bebo BLDG , 1st floor,
                        Addis Ababa, Ethiopia.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box">
                      <i style={{ color: "green" }} class="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@ewien.org</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-box">
                      <i
                        style={{ color: "green" }}
                        class="bx bx-phone-call"
                      ></i>
                      <h3>Call Us</h3>
                      <p>+251935314717</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <form
                  onSubmit={emailSubmitHandler}
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                  ref={form}
                >
                  <div class="row">
                    <div class="form-group">
                      <input
                        style={{ borderRadius: "5px" }}
                        type="text"
                        name="user_name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="form-group mt-3">
                      <input
                        style={{ borderRadius: "5px" }}
                        type="email"
                        class="form-control"
                        name="user_email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      style={{ borderRadius: "5px", colo: "green" }}
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      style={{ borderRadius: "5px" }}
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      className="button"
                      // onClick={emailSubmitHandler}
                      type="submit"
                      style={{
                        background: "green",
                      }}
                    >
                      Submit Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="map mt-2">
          <div class="container-fluid p-0"></div>
        </section>
      </div>
      <SmallModal modalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
        <Alert message="message sent successfully" type="success" />
      </SmallModal>
    </Container>
  );
}
const Container = styled.div`
  input,
  textarea {
    outline: none;
    border-radius: 5px;
    border: 1px solid green;
    color: green;
    ::placeholder {
      color: green;
    }
  }
  .button {
    border-radius: 5px;
    background-color: green;
  }
`;
export default Contactus;
