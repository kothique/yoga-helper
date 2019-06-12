import Vue from 'vue'
import uuid from 'uuid'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  mutations: {
    clear(state) {
      state.items = {}
    },
    setItem(state, doc) {
      Vue.set(state.items, doc.id, doc)
    },
    updateItem(state, { id, key, value }) {
      Vue.set(state.items[id], key, value)
    },
    removeItem(state, id) {
      Vue.delete(state.items, id)
    }
  },
  actions: {
    $init(context, store) {
      // context.commit('clear')
    },
    newItem(context, { name, duration }) {
      const id = uuid.v4()
      context.commit('setItem', { id, name, duration })
      return id
    },
    updateItem(context, id, key, value) {
      context.commit('updateItem', { id, key, value })
    },
    removeItem(context, id) {
      context.commit('removeItem', id)
    }
  }
}