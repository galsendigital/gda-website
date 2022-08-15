import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Slider extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        interval={4000}
        useKeyboardArrows={true}
        infiniteLoop={true}
        className="bg-primary text-white py-3 xl:py-5 rounded-xl"
      >
        <div className="testimonial-box">
          <p className="testimonial">
            “ Rapport qualité-prix très positif et facile de travailler avec
            vous car vous savez vous adapter et répondre aux besoins clients. “
          </p>
          <div className="group">
            <span>Mossane GROUP</span>
            <span className="underline"></span>
          </div>
        </div>
        <div className="testimonial-box">
          <p className="testimonial">
            “C'est ce genre de service dont rêverai tout entrepreneur. Sérieux
            et professionnel.”
          </p>
          <div className="group">
            <span>Xadimmalmokhtar</span>
            <span className="underline"></span>
          </div>
        </div>
        <div className="testimonial-box">
          <p className="testimonial">
            “Je suis vraiment satisfait de votre disponibilité et de votre
            professionnalisme. Je recommanderai vos services.“
          </p>
          <div className="group">
            <span>M Carré Group</span>
            <span className="underline"></span>
          </div>
        </div>
      </Carousel>
    );
  }
}
