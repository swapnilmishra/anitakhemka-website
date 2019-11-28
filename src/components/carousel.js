import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Arrow = ({ innerText }) => {
  return <button className="text-gray-500 p-2 text-lg">{innerText}</button>
}

const ContentCarousel = ({ carouselData, ...restProps }) => {
  return (
    <div>
      <Carousel
        arrows
        arrowLeft={<Arrow innerText="<" />}
        arrowRight={<Arrow innerText=">" />}
        addArrowClickHandler
        draggable={false}
        {...restProps}
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
      className="text-xs font-normal text-gray-900 leading-loose tracking-wider p-6"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

const Caption = ({ text }) => {
  return (
    <div className="text-sm font-normal text-gray-900 mt-2 text-right">
      {text}
    </div>
  )
}

const renderImg = ({ img: { caption, src }, key }) => {
  return (
    <div key={key}>
      <img src={src} className="block carousel-image" alt={src} />
      {caption && <Caption text={caption} />}
    </div>
  )
}

export default ContentCarousel
