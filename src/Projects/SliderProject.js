import { useState } from "react";

export default function SliderProject() {
  const testimonials = [
    { text: "thank you u the goat", img: "./Dog1.jpg" },
    { text: "how did you get so handsome", img: "./Dog2.jpg" },
    { text: "this guy can do a backflip", img: "./Dog3.jpg" },
  ];
  let [slider, setSlider] = useState(0);
  return (
    <>
      <div className="Slider">
        <button
          className="left"
          onClick={() => {
            if (slider > 0) {
              setSlider((slider = slider - 1));
            }
          }}
        >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div>
          <img alt="fuck you eslint stop making my code good" src={testimonials[slider].img} />
          <p>{`"${testimonials[slider].text}"`}</p>
        </div>
        <button
          className="right"
          onClick={() => {
            if (slider < testimonials.length - 1) {
              setSlider((slider = slider + 1));
            }
          }}
        >
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
}