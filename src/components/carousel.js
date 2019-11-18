import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Arrow = ({ innerText }) => {
  return <button className="text-gray-500 p-2 text-lg">{innerText}</button>
}

const ContentCarousel = ({ carouselData }) => {
  return (
    <div>
      <Carousel
        arrows
        arrowLeft={<Arrow innerText="<" />}
        arrowRight={<Arrow innerText=">" />}
        addArrowClickHandler
        draggable={false}
      >
        {carouselData.map((carouselItem, idx) => {
          let render = null
          if (carouselItem.img) {
            render = renderImg({ ...carouselItem, ...{ key: idx } })
          } else if (carouselItem.text) {
            render = renderText({ ...carouselItem, ...{ key: idx } })
          }
          return render
        })}
      </Carousel>
    </div>
  )
}

const renderText = ({ text, key }) => {
  return (
    <div
      key={key}
      className="text-xs font-light text-gray-600 leading-loose tracking-wider p-6"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

const renderImg = ({ img: { src, caption }, key }) => {
  return (
    <div key={key}>
      <img src={src} className="block carousel-image" alt={src} />
      {caption && <p className="text-xs text-gray-600 mt-6">{caption}</p>}
    </div>
  )
}

export default ContentCarousel
