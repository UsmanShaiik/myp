import React, { useEffect, useRef, useState } from 'react';
import './Slider.css'; // Ensure to include necessary styles

const Slider = ({ type }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderContainer = slider.querySelector("[data-slider-container]");
    const sliderPrevBtn = slider.querySelector("[data-slider-prev]");
    const sliderNextBtn = slider.querySelector("[data-slider-next]");
    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    const moveSliderItem = () => {
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlide].offsetLeft}px)`;
    };

    const slideNext = () => {
      if (currentSlide >= totalSlidableItems) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(prev => prev + 1);
      }
      moveSliderItem();
    };

    const slidePrev = () => {
      if (currentSlide <= 0) {
        setCurrentSlide(totalSlidableItems);
      } else {
        setCurrentSlide(prev => prev - 1);
      }
      moveSliderItem();
    };

    sliderNextBtn.addEventListener("click", slideNext);
    sliderPrevBtn.addEventListener("click", slidePrev);

    const handleWheel = (event) => {
      if (event.shiftKey && event.deltaY > 0) slideNext();
      if (event.shiftKey && event.deltaY < 0) slidePrev();
    };

    slider.addEventListener("wheel", handleWheel);

    const handleResize = () => {
      totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
      totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
      moveSliderItem();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      sliderNextBtn.removeEventListener("click", slideNext);
      sliderPrevBtn.removeEventListener("click", slidePrev);
      slider.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]);

  return (
    <div className={`slider ${type}`} data-slider ref={sliderRef}>
      <ul className="slider-container" data-slider-container>
        {/* Render slider items based on type */}
      </ul>
      <div className="slider-controls">
        <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
          <div className="line"></div>
          <div className="arrow"></div>
        </button>
        <button className="slider-control next" data-slider-next aria-label="Slide to next item">
          <div className="line"></div>
          <div className="arrow"></div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
