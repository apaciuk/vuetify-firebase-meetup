<template>
<v-container>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            v-bind:src="meetup.imageUrl"
            v-bind:key="meetup.id">
            <div class="title">
              <h3 class="title" style="color:#fff;">{{ meetup.title }}</h3>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p class="font-weight-bold text--primary">Join our earth shattering meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      meetups: [
        { imageUrl: './static/new-york.webp', id: 'fghstgfyer653', title: 'Meetup in New York' },
                { imageUrl: './static/berlin.webp', id: 'hdgdtsdfrt6745', title: 'Meetup in Berlin' },
                                { imageUrl: './static/paris.webp', id: 'hdgdtsdfrt6745', title: 'Meetup in Paris' },
                                 { imageUrl: './static/moscow.webp', id: 'hdgdtsdfrt6745', title: 'Meetup in Moscow' },
                                  { imageUrl: './static/amsterdam.webp', id: 'hdgdtsdfrt6745', title: 'Meetup in Amsterdam' }

      ]

    }
  }
}

</script>

<style lang="stylus" scoped>
.title {

}

</style>>
