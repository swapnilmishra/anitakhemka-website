export const PageTitles = {
  Laxmi: "Laxmi",
  Kashmir: "Kashmir",
  SelfPortraits: "Self Portraits",
  BeingAnita: "My Name is Anita",
  Munna: "Munna Guru & Ramkali",
  HivAids: "HIV/AIDS",
  MaternalHealth: "Maternal Health",
  Commissioned: "Commissioned",
  About: "About",
}

export const sidenavItemsCommissioned = selectIndex => {
  let items = [
    { url: "/commissioned/jcb", title: "JCB Portraits" },
    {
      url: "/women-deliver/afghanistan",
      title: "Women Deliver",
    },
    { url: "/commissioned/hiv-aids", title: "HIV/AIDS" },
    { url: "/commissioned/blind-boys", title: "Blind Boys Academy" },
  ]
  if (typeof selectIndex !== "undefined") {
    items[selectIndex].selected = true
  }
  return items
}

export const sidenavItemsWomenDeliver = selectIndex => {
  let items = [
    { url: "/women-deliver/afghanistan", title: "Afghanistan" },
    {
      url: "/women-deliver/india",
      title: "India",
    },
    { url: "/women-deliver/nepal", title: "Nepal" },
    { url: "/women-deliver/pakistan", title: "Pakistan" },
  ]
  if (typeof selectIndex !== "undefined") {
    items[selectIndex].selected = true
  }
  return items
}
