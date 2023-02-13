import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./aboutStyles.css";

import Henry from "../../assets/images/Henry.png";
import FCCjs from "../../assets/images/FCC-JS.png";
import FCCwd from "../../assets/images/FCC-WD.png";
import FCCbe from "../../assets/images/FCC_backend.png";
import QA from "../../assets/images/QA.png";

import { Row } from "react-bootstrap";

SwiperCore.use([Navigation, Pagination]);

const About = () => {
    return (
        <div className="about_container">
            <Row>
                <Swiper
                    className="swiper_container"
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img
                            alt="henry certificate"
                            src={Henry}
                            className="card_image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            alt="freecodecamp web design certificate"
                            src={FCCwd}
                            className="card_image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            alt="freecodecamp backend certificate"
                            src={FCCbe}
                            className="card_image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            alt="freecodecamp javascript certificate"
                            src={FCCjs}
                            className="card_image"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            alt="utn testing certificate"
                            src={QA}
                            className="card_image"
                        />
                    </SwiperSlide>
                </Swiper>
            </Row>
        </div>
    );
};

export default About;
