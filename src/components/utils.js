import Store from "./store"

export class BuildImageObject {
  constructor({ basePath = "/" }) {
    this.basePath = basePath
  }

  buildImage({ imgName, caption }) {
    let imgObj = {
      img: {
        src: `/${this.basePath}/${imgName}`,
      },
    }

    if (caption) {
      imgObj = Object.assign(imgObj, { caption })
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

export const getImagesUsingCount = ({ count, imageBuilder }) => {
  const images = []
  let imageNum = 0
  while (imageNum < count) {
    console.log(imageNum)
    images.push(imageBuilder.buildImage({ imgName: `${imageNum + 1}.jpg` }))
    imageNum++
  }
  return images
}
