import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../pageHeaderContent";
import ImageOne from "../images/image1.png";
import ImageTwo from "../images/image2.png";
import ImageThree from "../images/image3.png";
import ImageFour from "../images/Image4.png";
import ImageFive from "../images/image5.jpeg";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    Name: "Business Website",
    image: ImageOne,
    link: "https://mfarhan6918.github.io/businessWebsite/",
  },
  {
    id: 3,
    Name: "Agency Portfolio",
    image: ImageTwo,
    link: "https://mfarhan6918.github.io/tailwind_react_agency/",
  },
  {
    id: 2,
    Name: "Resturant Website",
    image: ImageThree,
    link: "https://mfarhan6918.github.io/HolydayWize/",
  },
  {
    id: 2,
    Name: "Foody Website",
    image: ImageFour,
    link: "https://mfarhan6918.github.io/foodyWebsite/",
  },
  {
    id: 3,
    Name: "Netflix Clone",
    image: ImageFive,
    link: "https://mfarhan6918.github.io/netflix_Clone/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }
  const filteredItems = filteredValue === 1 ? portfolioData :
      portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}/>

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div className="portfolio__content__cards__item"
              key={`cardItem${item.Name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}>
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.Name}</p>
                    <button><a href={item.link}>Visit</a></button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
