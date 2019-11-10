let store = {}

export const createStore = () => {
  return {
    setStore({ key, value }) {
      store[key] = value
      return store
    },
    getStore({ key }) {
      return store[key]
    },
  }
}

export default createStore()
