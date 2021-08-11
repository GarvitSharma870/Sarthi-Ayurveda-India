import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} swipeable>
            <div>
                    <img className="topImage" src="../Images/Carousel1.jpg" alt="" />
                </div>
                <div>
                    <img className="topImage" src="../Images/Carousel4.jpg" alt="" />
                    <p className="legend"><b>Fight Against Illness With Ayurveda</b></p>
                </div>
                <div>
                    <img className="topImage" src="../Images/Carousel3.jpg" alt="" />
                    <p className="legend"><b>Healthy Life With Ayurveda</b></p>
                </div>
                <div>
                    <img className="topImage" src="../Images/Carousel2.jpg" alt="" />
                </div>
                 <div>
                    <img className="topImage" src="../Images/Carousel0.jpg" alt="" />
                    <p className="legend"><b>Happy Life With Ayurveda</b></p>
                </div>
            </Carousel>
        </div>
    );
}