<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12 sm-10 md8 offset-sm1 offset-md2>
        <v-card-media class="info">
          <v-container fluid>
             <v-flex xs5 sm4 md3>
               <v-card-media
                 src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                 height="130px">
                </v-card-media>
             </v-flex>
             <v-flex xs7 sm8 md9>
               <v-card-title primary-title>
                 <div>
                 <h5 class="white--text mb-0">Meetup</h5>
                 <div>17th June 2020</div>
                 </div>
              </v-card-title>
              <v-card-actions>
              <v-btn flat to="/meetups/1"><v-icon left light>arrow_forward</v-icon>Meetup</v-btn>
              </v-card-actions>
              </v-flex>
          </v-container>
        </v-card-media>
      </v-flex>
    </v-layout>
  </v-container>
</template>
