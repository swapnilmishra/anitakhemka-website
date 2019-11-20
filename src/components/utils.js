import Store from "./store"

export class BuildImageObject {
  constructor({ basePath = "/" }) {
    this.basePath = basePath
  }

  buildImage({ imgName, caption }) {
    let imgObj = {
      img: { src: `/${this.basePath}/${imgName}` },
    }

    if (caption) {
      imgObj.img.caption = caption
    }
    return imgObj
  }
}

export const setNavItem = val => {
  return Store.setStore({ key: "currentNavItem", value: val })
}

export const getCurrentNavItem = () => {
  return Store.getStore({ key: "currentNavItem" })
}

// build image names when the image names are in sequence e.g 1.jpg, 2.jpg
export const buildSequencedImages = ({ from = 1, till, imageBuilder }) => {
  const images = []
  let imageNum = from
  while (imageNum <= till) {
    images.push(imageBuilder.buildImage({ imgName: `${imageNum}.jpg` }))
    imageNum++
  }
  return images
}
