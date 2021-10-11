<template>
   <div>
    <h1>Horse</h1>

    <table id="horse_table" class="center">
  <thead>
    <tr>
      <th>Race Number</th>
      <th>Meeting Name</th>
      <th>Time To Race</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in horse_races" v-bind:key="item.race_number">
      <td>{{item.race_number}}</td>
      <td>{{item.meeting_name}}</td>
      <td>{{current_time(item.advertised_start.seconds)}}</td>
    </tr>
  </tbody>
</table>

   </div>
</template>

<script>
import axios from 'axios';
  const HORSE_KEY = "4a2788f8-e825-4d36-9894-efd4baf1cfae"
  export default {
    name: 'horse',
    data() {
      return {
        races: [],
        errors: [],
        horse_races: [],
      }
    },
    // Fetches when the component is created.
    created() {
      this.timer = setInterval(this.fetch_data, 1000)
    },

    methods: {
      current_time(race_time) {
      const current = new Date()
      const time = current.getTime() / 1000
      const time_to_race_sec = race_time - time

      if (time_to_race_sec < 0) {
        return time_to_race_sec.toFixed(0).toString() + "s"
      }
      
      const time_to_race = new Date(time_to_race_sec * 1000)

      return time_to_race.getMinutes().toString() + "m " + time_to_race.getSeconds().toString() + "s";
      },

      fetch_data() {
        axios.get('https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10')
        .then(response => {
        // JSON responses are automatically parsed.
        this.races = response.data.data.race_summaries
        this.horse_races = new Array()
        var count = 0;
        for (var key in this.races) {
          if (count == 5) {
            break
          }
          var value = this.races[key]
          if (value.category_id == HORSE_KEY) {
            this.horse_races.push(value)
            count += 1;
          }
        }
        this.horse_races.sort(function(a, b) {
          return a.advertised_start.seconds - b.advertised_start.seconds
        })
        //this.list=rep.data.data;
        //console.warn(resp.data.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
      }
    }
}
</script>

<style>
td, th {
  border: 1px solid #000000;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #86d883;
}

tr:nth-child(odd) {
  background-color: #fff7b2;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
</style>