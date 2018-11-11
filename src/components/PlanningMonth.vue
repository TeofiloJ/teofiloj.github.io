<template>

     <div class="col ml-3 border">
        <div class="row">
            <div class="col">Lundi</div>
            <div class="col">Mardi</div>
            <div class="col">Mercredi</div>
            <div class="col">Jeudi</div>
            <div class="col">Vendredi</div>
        </div>
        <div class="row">
            <div >
              <div>

              </div>
            </div>
        </div> 

        
           

    </div>
</template>

<script>

import { EventBus } from '../main.js';

const planning = [
  {
    id: 0,
    name: "rendez vous médecin",
    userId: 1,
    dateEventBegin: "15",
    dateEventEnd: ""
  },
  {
    id: 1,
    name: "mise en prod",
    userId: 1,
    dateEventBegin: "20",
    dateEventEnd: ""
  },
  {
    id: 2,
    name: "réunion fin de projet",
    userId: 1,
    dateEventBegin: "15",
    dateEventEnd: ""
  },
  {
    id: 3,
    name: "montage vidéo",
    userId: 2,
    dateEventBegin: "29",
    dateEventEnd: ""
  },
  {
    id: 4,
    name: "pause café",
    userId: 2,
    dateEventBegin: "15",
    dateEventEnd: ""
  }
];

export default {
  components: {},
  data() {
    return {
      planningSorted : {
        lundi:{
          events : []
        },
        mardi:{
          events : []
        },
        mercredi:{
          events : []
        },
        jeudi:{
          events : []
        },
        vendredi:{
          events : []
        }

      },
      selectedMonth: ""
    };
  },
  created() {
    // Using the service bus
    EventBus.$on('setSelectedMonth', (selectedMonth) => {
      console.log("event bien recu month")
    });
  },
  props: {
    session: {
      type: Object,
      required: true
    },
    planning: {
      type: Array,
      required: true
    }
  }
};
</script>




