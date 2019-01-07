import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestimonialsShort extends Component {
  render() {

    const settings = {
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="grid-item testimonials-item-1">
          <i className="material-icons quote-icon">format_quote</i>
          <Slider {...settings}>
            <div>
              <p>
                Just a brief note to thank you for a wonderful few days
                investigating what Cyprus has to offer golfers. I was not only
                enormously impressed with what I saw but also with the careful
                and well organised arrangements you made. It must have taken a
                huge effort to put together such a hectic itinerary but it was
                well worth it as it s important to see as much as possible in a
                short space of time...
              </p>
            </div>

            <div>
              <p>
                May I take this opportunity to congratulate you John and your
                team on a job well done. We shall be happy to review any future
                press visits that you may wish to organize and involve Columbia.
              </p>
            </div>

            <div>
              <p>
                My team and I would like to thank you for bringing to our hotel
                and resort this group of golf media specialists and sincerely
                hope that the write ups of the impression made will create the
                positive awareness needed to boost our 5 star property.
              </p>
            </div>
          </Slider>
      </div>
    );
  }
}

export default TestimonialsShort;
