<template>
  <v-content>
    <v-container fluid >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" width="8%">NO</th>
              <th class="text-left">LINK</th>
              <th class="text-left">RATING</th>
              <th class="text-left">JML VOTE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in listRated" :key="item">
              <td>{{ index + 1 }}</td>
              <td><a :href="'https://lagudaerah.id/' + item" target="_blank">https://lagudaerah.id/{{ item }}</a></td>
              <td>{{ sumRating("adi-sayang") }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    rating: 0,
    listRated: []
  }),

  methods: {
    listCollections () {
      this.$axios.get(`${this.serverUrl}/app/rated`)
        .then(response => {
          this.listRated = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    sumRating (slug) {
      this.$axios.get(`${this.serverUrl}/app/rating/${slug}`)
        .then(response => {
          return response.data.reduce((a, b) => a + b) / response.data.length
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.listCollections()
    this.sumRating('seni-rupa')
  }

}
</script>
