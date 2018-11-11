<template>

     <div class="col ml-3 border">
        <div class="row">
            <div v-for="jour in planningSorted" class="col">
                <span>{{jour.jour}}</span>                  
                <div v-for="event in jour.events">
                    <div v-if="event.dateEventBegin < calculatedDateEnd">
                          <pre v-b-modal.modal-center="'myModal' + event.id" class="border mb-2 mt-2" style="background-color:white; height:20%">{{event.name}}</pre>
                            <b-modal v-bind:title="event.name" v-bind:id="'myModal' + event.id">
                              <div>
                                <p>Date début : {{event.dateEventBegin}}</p>                                
                              </div>
                              <div>
                                <p>Date fin : {{event.dateEventEnd}}</p>
                              </div>
                              <b-btn on:click="PlanningServices.updateEvent(event)">boutton</b-btn>
                            </b-modal>                          
                    </div>
                </div> 
            </div>
            <div class="col">Mardi</div>
            <div class="col">Mercredi</div>
            <div class="col">Jeudi</div>
            <div class="col">Vendredi</div>
        </div>
        
           

    </div>
</template>

<script>

import { EventBus } from '../main.js';


const previousEvent = {

}

export default {
  components: {},
  data() {
    return {
      planning:planning,
      planningSorted : {
        lundi:{
          jour : "lundi",
          events : []
        },
        mardi:{
          jour : "mardi",
          events : []
        },
        mercredi:{
          jour : "mercredi",
          events : []
        },
        jeudi:{
          jour : "jeudi",
          events : []
        },
        vendredi:{
          jour : "vendredi",
          events : []
        }

      },
      calculatedDateBegin: "",
      calculatedDateEnd: "",
      selectedUser: ""
    };
  },
  created() {
    // Using the service bus
    EventBus.$on('setSelectedWeek', (calculatedDateBegin, calculatedDateEnd, selectedUser) => {
      console.log("event bien recu week")
      this.calculatedDateBegin = calculatedDateBegin
      this.calculatedDateEnd = calculatedDateEnd
      this.selectedUser = selectedUser
      console.log(this.calculatedDateBegin)
      console.log(this.calculatedDateEnd)

      this.renderPlanning()

    });
  },
  methods: {
    renderPlanning:function(){

      this.planning.forEach(event => {
        if (event.dateEventBegin > this.calculatedDateBegin && event.dateEventBegin < this.$moment(event.dateEventBegin).weekday(2).format('YYYY-MM-DDTHH:mm')) {
          this.planningSorted.push(event)
        }else if(event.dateEventBegin > this.$moment(event.dateEventBegin).weekday(2).format('YYYY-MM-DDTHH:mm') && event.dateEventBegin < this.$moment(event.dateEventBegin).weekday(3).format('YYYY-MM-DDTHH:mm')) {
          this.planningSorted.push(event)
        }else if(event.dateEventBegin > this.$moment(event.dateEventBegin).weekday(3).format('YYYY-MM-DDTHH:mm') && event.dateEventBegin < this.$moment(event.dateEventBegin).weekday(4).format('YYYY-MM-DDTHH:mm')) {
          this.planningSorted.push(event)
        }else if(event.dateEventBegin > this.$moment(event.dateEventBegin).weekday(4).format('YYYY-MM-DDTHH:mm') && event.dateEventBegin < this.$moment(event.dateEventBegin).weekday(5).format('YYYY-MM-DDTHH:mm')) {
          this.planningSorted.push(event)
        }else if(event.dateEventBegin > this.$moment(event.dateEventBegin).weekday(5).format('YYYY-MM-DDTHH:mm') && event.dateEventBegin < this.$moment(event.dateEventBegin).weekday(6).format('YYYY-MM-DDTHH:mm')) {
          this.planningSorted.push(event)
        }
      });
      console.log(render)
    }
    
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




