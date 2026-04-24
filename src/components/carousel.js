import React, { useState, useRef, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const Arrow = ({ innerText, onClick, disabled }) => {
  return (
    <button
      className="text-gray-500 p-2 text-3xl disabled:opacity-30"
      onClick={onClick}
      disabled={disabled}
    >
      {innerText}
    </button>
  )
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

const renderVideo = ({
  video: { src, caption },
  key,
  className = "carousel-image",
  variant,
}) => {
  return (
    <div>
      <video controls className={`block ${className}`} key={key}>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      {caption && <Caption text={caption} variant={variant} />}
    </div>
  )
}

const PageCarousel = ({ carouselData, onImageClick, ...restProps }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselData.map((carouselItem, idx) => {
            let render = null
            if (carouselItem.img) {
              render = renderImg({
                ...carouselItem,
                key: idx,
                onClick: () => {
                  onImageClick(selectedIndex)
                },
              })
            } else if (carouselItem.text) {
              render = renderText({ ...carouselItem, key: idx })
            } else if (carouselItem.video) {
              render = renderVideo({ ...carouselItem, key: idx })
            }
            return (
              <div key={idx} className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
                {render}
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute -left-2 top-1/2 -translate-y-1/2">
        <Arrow innerText="<" onClick={scrollPrev} disabled={!canScrollPrev} />
      </div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2">
        <Arrow innerText=">" onClick={scrollNext} disabled={!canScrollNext} />
      </div>
    </div>
  )
}

export const FullPageCarousel = ({
  carouselData,
  onSlideChange,
  initialValue = 0,
  ...restProps
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    startIndex: initialValue,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const index = emblaApi.selectedScrollSnap()
    onSlideChange(index)
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi, onSlideChange])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
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
            } else if (carouselItem.video) {
              render = renderVideo({
                ...carouselItem,
                key: idx,
                className: "full-page-carousel-image",
                variant: "dark",
              })
            }
            return (
              <div key={idx} className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
                {render}
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute -left-2 top-1/2 -translate-y-1/2">
        <Arrow innerText="<" onClick={scrollPrev} disabled={!canScrollPrev} />
      </div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2">
        <Arrow innerText=">" onClick={scrollNext} disabled={!canScrollNext} />
      </div>
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
        <div
          className="fixed top-0 left-0 h-screen w-screen flex flex-col justify-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
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
