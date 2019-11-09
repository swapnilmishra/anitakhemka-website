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
