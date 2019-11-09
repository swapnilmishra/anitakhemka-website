import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Arrow = ({ innerText }) => {
  return <button className="text-gray-700 p-1 text-2xl">{innerText}</button>
}

const ContentCarousel = ({ carouselData }) => {
  return (
    <div>
      <Carousel
        className="border"
        arrows
        arrowLeft={<Arrow innerText="<<" />}
        arrowRight={<Arrow innerText=">>" />}
        addArrowClickHandler
        draggable={false}
      >
        {carouselData.map(carouselItem => {
          let render = null
          if (carouselItem.img) {
            render = renderImg(carouselItem)
          } else if (carouselItem.text) {
            render = renderText(carouselItem)
          }
          return render
        })}
      </Carousel>
    </div>
  )
}

const renderText = ({ text }) => {
  return (
    <div className="text-lg font-thin text-gray-600 italic leading-loose tracking-widest p-6">
      {text}
    </div>
  )
}

const renderImg = ({ img: { src, caption } }) => {
  return (
    <div>
      <img src={src} className="block" />
      {caption && <p className="text-xs text-gray-500 mt-6">{caption}</p>}
    </div>
  )
}

export default ContentCarousel
