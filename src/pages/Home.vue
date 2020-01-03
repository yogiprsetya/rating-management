<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in listRated" :key="item">
                    <td>{{ item }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    listRated: []
  }),

  methods: {
    listContent (page) {
      this.$axios.get(`${this.serverUrl}/app/rated`)
        .then(response => {
          this.listRated = response.data
          console.log(this.listRated)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.listContent()
  }

}
</script>
