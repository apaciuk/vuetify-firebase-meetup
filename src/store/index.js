import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: './static/new-york.webp',
        id: 'fghstgfyer653',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York' },
      { imageUrl: './static/berlin.webp',
        id: 'hdgdtsdfrt6745',
        title: 'Meetup in Berlin',
        date: new Date(),
        location: 'Berlin',
        description: 'Its Berlin' },
      { imageUrl: './static/paris.webp',
        id: 'asdfkjhgfdd',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'Paris' },
      { imageUrl: './static/moscow.webp',
        id: 'zxcvbnmfgj',
        title: 'Meetup in Moscow',
        date: new Date(),
        location: 'Moscow',
        description: 'Moscow' },
      { imageUrl: './static/amsterdam.webp',
        id: 'qwertydfgfg',
        title: 'Meetup in Amsterdam',
        date: new Date(),
        location: 'Amsterdam',
        description: 'Its Amsterdam' }

    ]
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetup(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
