/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselContainer } from "react-responsive-carousel";
import data from "../public/data";

export default function Carousel() {
  return (
    <CarouselContainer
      className="rounded-xl overflow-hidden"
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}>
      {data.map(d => {
        return (
          <div key={d.roomId}>
            <img
              className="w-screen h-[35vh] lg:h-[35vw] object-cover"
              src={d.image}
              alt="study room"
            />
          </div>
        );
      })}
    </CarouselContainer>
  );
}
