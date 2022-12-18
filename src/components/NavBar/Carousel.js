
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let autoplay = null;

  useEffect(() => {
    if (props.autoplay && !autoplay) {
      startAutoplay();
    }
  });

  useEffect(() => {
    if (props.autoplay && !autoplay) {
      startAutoplay();
    }
  });

  const handleAutoplay = () => {
    if (currentSlide === props.children.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const startAutoplay = () => {
    const interval = props.interval || 5000;
    autoplay = setInterval(handleAutoplay, interval);
  };

  const selectSlide = (n) => {
    setCurrentSlide(n);
  };

  const handleClick = (index) => {
    return () => selectSlide(index);
  };

  const renderDots = () => {
    return props.children.map((item, index) => {
      const cn = classnames('dot', {
        active: currentSlide === index
      });
      return <button onClick={handleClick(index)} className={cn} />;
    });
  };

  const assignLeft = (index) => {
    if (currentSlide === 0) {
      return index === props.children.length - 1;
    }

    return index === currentSlide - 1;
  };

  const assignRight = (index) => {
    if (currentSlide === props.children.length - 1) {
      return index === 0;
    }

    return index === currentSlide + 1;
  };

  return (
    <div>
      <div className="slides">
        {props.children.map((slide, index) => {
          const cn = classnames(
            'slide',
            { left: assignLeft(index) },
            { center: index === currentSlide },
            { right: assignRight(index) }
          );
          return (
            <button onClick={handleClick(index)} className={cn}>
              <div>{slide}</div>
            </button>
          );
        })}
      </div>
      <div>{renderDots()}</div>
    </div>
  );
}

export default Carousel;