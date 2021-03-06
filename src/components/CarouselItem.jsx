import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png'
import plusIcon from '../assets/static/plus.png'
import imageBg from '../assets/static/1.jpg';

const CarouselItem = ({cover = imageBg, title = "In the Dark", year = 2009, contentRating = "16+", duration = 164}) => (
  <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
          <div>
              <img className="carousel-item__details--img" src={playIcon} alt="Play" />
              <img className="carousel-item__details--img" src={plusIcon} alt="Plus" />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration} Minutos`}
          </p>
      </div>
  </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarouselItem;