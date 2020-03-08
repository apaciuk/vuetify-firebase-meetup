import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: './static/new-york.webp',
        id: 'fghstgfyer653',
        title: 'Meetup in New York',
        date: '2020-07-10' },
      { imageUrl: './static/berlin.webp',
        id: 'hdgdtsdfrt6745',
        title: 'Meetup in Berlin',
        date: '2020-09-10' },
      { imageUrl: './static/paris.webp',
        id: 'asdfkjhgfdd',
        title: 'Meetup in Paris',
        date: '2020-09-12' },
      { imageUrl: './static/moscow.webp',
        id: 'zxcvbnmfgj',
        title: 'Meetup in Moscow',
        date: '2020-05-05' },
      { imageUrl: './static/amsterdam.webp',
        id: 'qwertydfgfg',
        title: 'Meetup in Amsterdam',
        date: '2020-07-07' }

    ]
  },
  user: {
    id: 'asdfghjkldfgh',
    registeredMeetups: ['hdgdtsdfrt6745']
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedmeetups.sort((meetupA, meetupB) => {
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
