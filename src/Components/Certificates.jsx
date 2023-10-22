import React from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import certificate_Image1 from "../assets/images/Coursera_JavaScript_Programming.jpg";
import certificate_Image2 from "../assets/images/Coursera_Frontend_Development.jpg";
import certificate_Image3 from "../assets/images/PITB_Creative_Desin.jpg";
import certificate_Image4 from "../assets/images/Coursera_Version_Control.jpg";
import certificate_Image5 from "../assets/images/Coursera_Html_and_Css_in_depth.jpg";
import certificate_Image6 from "../assets/images/Coursera_React_Basics.jpg";
<<<<<<< HEAD
import certificate_Image7 from "../assets/images/Coursera_Advanced_React.jpg";
=======
>>>>>>> 96f2ebd4acc4623b552704f43c2dca385bba9ff4

const Certificates = () => {
  return (
    <>
      <section className="certificates">
        <Container className="certificates__container">
          <div className="heading">
            <h2>Certificates</h2>
<<<<<<< HEAD
            <p>What I learned</p>
=======
            <p>What i learned</p>
>>>>>>> 96f2ebd4acc4623b552704f43c2dca385bba9ff4
          </div>
          <Row className="certificates__container__row d-flex justify-content-center align-items-center gap-3">
            <Col className="col col-lg-12 certificates__container__row__col d-flex justify-content-center align-items-center">
              <div
                className="d-flex flex-column owl-carousel owl-theme"
                id="certificate"
              >
                <NavLink
                  href="https://coursera.org/share/7af7d67f4e86d739678bfc27996cfd7d"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image2}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      Intro to Frontend Development (Coursera)
                    </h5>
                  </div>
                </NavLink>

                <NavLink
                  href="https://coursera.org/share/b47e030d0db8273f9bff0e78d1be6f28"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image1}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      Programming with JavaScript (Coursera)
                    </h5>
                  </div>
                </NavLink>

                <NavLink
                  href="https://coursera.org/share/f06e095038773c3dbbdf219f659ceca9"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image4}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      Version Control in Development (Coursera)
                    </h5>
                  </div>
                </NavLink>

                <NavLink
                  href="https://coursera.org/share/b7ccadd73f105f6ba45dd3d18ce20180"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image5}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      Html and Css in Depth (Coursera)
                    </h5>
                  </div>
                </NavLink>

                <NavLink
                  href="https://coursera.org/share/d94ad9bf5d76ddde1ccbcee3e199c78f"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image6}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      React Basics (Coursera)
                    </h5>
                  </div>
                </NavLink>

                <NavLink
<<<<<<< HEAD
                  href="https://coursera.org/share/19174cf5cc67bad6d2623bb3e4a2ed33"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image7}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      Advanced React (Coursera)
                    </h5>
                  </div>
                </NavLink>

                <NavLink
=======
>>>>>>> 96f2ebd4acc4623b552704f43c2dca385bba9ff4
                  href="https://www.erozgaar.pitb.gov.pk/"
                  target="_blank"
                >
                  <div className="certificates__container__row__col__content item">
                    <img
                      src={certificate_Image3}
                      alt="certificates pic"
                      className="certificates__container__row__col__content__img"
                    />
                    <h5 className="certificates__container__row__col__content__title text-white">
                      eRozgaar Creative Design Course (PITB)
                    </h5>
                  </div>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Certificates;
