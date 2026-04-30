import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import CardComponent from "../Card/CardComponent";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";

function Carousel({ data }) {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
     
      slidesPerView: 7,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className={`swiper ${styles.swiper}`}>
      <div className="swiper-wrapper">
        {data.map((item) => (
          <div className="swiper-slide" key={item.id}>
            <CardComponent data={item} />
          </div>
        ))}
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default Carousel;