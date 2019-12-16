import React, { useState, useRef } from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Arrow = ({ innerText }) => {
  return <button className="text-gray-500 p-2 text-3xl">{innerText}</button>
}

const Text = ({ text, variant }) => {
  switch (variant) {
    case "dark":
      return (
        <div
          className="font-normal text-gray-200 leading-loose tracking-wider p-6"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )
    default:
      return (
        <div
          className="font-normal text-gray-900 leading-loose tracking-wider p-6"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )
  }
}

const renderText = ({ text, key, variant }) => {
  return <Text key={key} text={text} variant={variant} />
}

const Caption = ({ text, variant }) => {
  switch (variant) {
    case "dark":
      return (
        <div className="text-sm font-normal text-gray-200 mt-2 text-right">
          {text}
        </div>
      )

    default:
      return (
        <div className="text-sm font-normal text-gray-900 mt-2 text-right">
          {text}
        </div>
      )
  }
}

const renderImg = ({
  img: { caption, src },
  key,
  className = "carousel-image",
  onClick = () => {},
  variant,
}) => {
  return (
    <div key={key}>
      <img
        src={src}
        className={`block ${className}`}
        alt={src}
        onClick={onClick}
      />
      {caption && <Caption text={caption} variant={variant} />}
    </div>
  )
}

const PageCarousel = ({ carouselData, onImageClick, ...restProps }) => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <Carousel
        arrows
        arrowLeft={<Arrow innerText="<" />}
        arrowRight={<Arrow innerText=">" />}
        addArrowClickHandler
        draggable={false}
        onChange={idx => setValue(idx)}
        value={value}
        {...restProps}
      >
        {carouselData.map((carouselItem, idx) => {
          let render = null
          if (carouselItem.img) {
            render = renderImg({
              ...carouselItem,
              key: idx,
              onClick: () => {
                onImageClick(value)
              },
            })
          } else if (carouselItem.text) {
            render = renderText({ ...carouselItem, key: idx })
          }
          return render
        })}
      </Carousel>
    </div>
  )
}

export const FullPageCarousel = ({
  carouselData,
  onSlideChange,
  initialValue = 0,
  ...restProps
}) => {
  const [value, setValue] = useState(initialValue)
  return (
    <div>
      <Carousel
        arrows
        arrowLeft={<Arrow innerText="<" />}
        arrowRight={<Arrow innerText=">" />}
        addArrowClickHandler
        draggable={false}
        onChange={idx => {
          onSlideChange(idx)
          setValue(idx)
        }}
        value={value}
        {...restProps}
      >
        {carouselData.map((carouselItem, idx) => {
          let render = null
          if (carouselItem.img) {
            render = renderImg({
              ...carouselItem,
              key: idx,
              className: carouselItem.img.caption
                ? "full-page-carousel-image-with-label"
                : "full-page-carousel-image",
              variant: "dark",
            })
          } else if (carouselItem.text) {
            render = renderText({
              ...carouselItem,
              key: idx,
              variant: "dark",
            })
          }
          return render
        })}
      </Carousel>
    </div>
  )
}

const DefaultCarousel = ({ carouselData }) => {
  const [showFull, setFull] = useState(false)
  let currentImageIdx = useRef(0)

  return (
    <div>
      <PageCarousel
        carouselData={carouselData}
        onImageClick={idx => {
          currentImageIdx.current = idx
          setFull(true)
        }}
      />
      {showFull && (
        <div className="fixed top-0 left-0 bg-black h-screen w-screen flex flex-col justify-center">
          <button
            className="full-page-carousel-back-btn"
            onClick={() => setFull(false)}
          >
            {`<< back`}
          </button>
          <FullPageCarousel
            carouselData={carouselData}
            initialValue={currentImageIdx.current}
            onSlideChange={idx => {
              currentImageIdx.current = idx
            }}
          />
        </div>
      )}
    </div>
  )
}

export default DefaultCarousel
