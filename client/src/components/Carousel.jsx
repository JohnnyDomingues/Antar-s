import { useState } from "react";
import PropTypes from "prop-types";
import {
  PiArrowSquareRight,
  PiArrowSquareLeftLight,
  PiPlusSquare,
} from "react-icons/pi";
import "../styles/Carousel.css";

function Carousel({ items, onItemClick }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("");

  const generateItems = () => {
    const itemElements = [];
    for (let i = active - 1; i <= active + 1; i += 1) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }

      if (items[index]) {
        const level = active - i;
        itemElements.push(
          <Item
            key={items[index].id}
            poster={items[index]}
            level={level}
            onItemClick={onItemClick}
          />
        );
      }
    }
    return itemElements;
  };

  const moveLeft = () => {
    setActive((prevActive) => (prevActive - 1 + items.length) % items.length);
    setDirection("left");
  };

  const moveRight = () => {
    setActive((prevActive) => (prevActive + 1) % items.length);
    setDirection("right");
  };

  const handleKeyDown = (event, dir) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (dir === "left") {
        moveLeft();
      } else {
        moveRight();
      }
    }
  };

  return (
    <div id="carousel" className="noselect">
      <div
        className="arrow arrow-left"
        onClick={moveLeft}
        onKeyDown={(event) => handleKeyDown(event, "left")}
        role="button"
        tabIndex={0}
        aria-label="Move carousel left"
      >
        <i className="fi-arrow-left" />
        <PiArrowSquareLeftLight />
      </div>
      <div className={`carousel-items ${direction}`}>{generateItems()}</div>
      <div
        className="arrow arrow-right"
        onClick={moveRight}
        onKeyDown={(event) => handleKeyDown(event, "right")}
        role="button"
        tabIndex={0}
        aria-label="Move carousel right"
      >
        <i className="fi-arrow-right" />
        <PiArrowSquareRight />
      </div>
    </div>
  );
}

function Item({ poster, level, onItemClick }) {
  if (!poster || !poster.image_url) {
    console.error("Poster or poster.image_url is undefined");
    return null;
  }

  const className = `item level${level}`;

  return (
    <div className={className}>
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_API_URL}/${poster.image_url})`,
        }}
      >
        <button
          type="button"
          className="see-more-button"
          onClick={() => onItemClick(poster)}
          aria-label="See more"
        >
          <PiPlusSquare />
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      image_alt: PropTypes.string,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

Item.propTypes = {
  poster: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    image_alt: PropTypes.string,
  }).isRequired,
  level: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Carousel;
