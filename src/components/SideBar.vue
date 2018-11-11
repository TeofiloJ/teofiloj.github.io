<template>

    <!-- isAuth -->
    <div v-if="$emit('isAuth')">

        <span>Bonjour {{session.user.firstname}}</span>

        <div class="container">    
            <div class="row">

                <div>
                  <img  id="togglePlanning" src="../assets/calendar.png" alt="" v-on:click="$emit('togglePlanningView')">
                </div>                

                <div class="col-sm-6 form-group">
                    <div v-if="!toggleMonthView" class="input-group" id="week-input">
                      <input type='date' id='weekDatePicker' v-model="selectedWeek" />
                      <b-btn v-on:click="setSelectedWeek" variant="outline-success">Filtrer</b-btn>
                  </div>
                    <div v-else class="input-group" id="month-input">
                      <input type='text' id='monthDatePicker' v-model="selectedMonth"/>
                      <b-btn v-on:click="setSelectedMonth" variant="outline-success">Filtrer</b-btn>
                  </div>
              </div>
          </div>
        </div>


        <div v-if="session.user.status == 'salarié'">
            <h1>IF</h1>

        </div>
        <div v-else-if="this.session.user.mail == 'LOL' ">
                <h1> ELSEIF</h1>
        </div>
        <div v-else>
                <h1> ELSE</h1>
        </div>
    </div>

    <!-- !isAuth -->
    <div v-else>
        <form>
          <div class="form-group">
            <label for="periode_start">Période du plannning</label>
            <br/>
            <input type="date" id="periode_start">
            <input type="date" v-model="test" id="periode_end">
          </div>
        </form>
    </div>



</template>

<script>

import { EventBus } from '../main.js';

export default {
  components: {},
  data() {
    return {
      selectedWeek: "",
      selectedMonth: "",
      selectedUser : session.user.id
    }
  },
  methods: {
    setSelectedWeek:function(){
      
      var calculatedDateBegin = this.$moment(this.selectedWeek).weekday(1).format('YYYY-MM-DDTHH:mm');
      var calculatedDateEnd = this.$moment(this.selectedWeek).weekday(6).format('YYYY-MM-DDTHH:mm'); // .weekday(6) car weekday(5) = vendredi matin à 00h00

      console.log(this.selectedWeek)
      console.log("lundi: " +  calculatedDateBegin)
      console.log("vendredi: " +  calculatedDateEnd)

      EventBus.$emit('setSelectedWeek', calculatedDateBegin, calculatedDateEnd, this.selectedUser);
    },
    setSelectedMonth:function(){
      EventBus.$emit('setSelectedMonth', this.selectedMonth);
    },
  },
  props: {
    session: {
      type: Object,
      required: true
    },
    toggleMonthView: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>

#togglePlanning {
  width: 25px;
  height: 25px;
}
</style>

