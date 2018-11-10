<template>

     <div class="col ml-3 border">
        <div class="row">
            <div class="col">
                <span>Lundi</span>                  
                <div v-for='event in planning'>
                    <div v-if="event.dateEventBegin < selectedDateBegin">
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

import PlanningServices from "../services/PlanningServices.js"

const planning = [
  {
    id:0,
    name: "rendez vous médecin",
    color: "blue",
    dateEventBegin: "15",
    dateEventEnd: ""
  },
  {
    id:1,
    name: "mise en prod",
    color: "blue",
    dateEventBegin: "20",
    dateEventEnd: ""
  },
  {
    id:2,
    name: "réunion fin de projet",
    color: "blue",
    dateEventBegin: "15",
    dateEventEnd: ""
  },
  {
    id:3,
    name: "montage vidéo",
    color: "blue",
    dateEventBegin: "29",
    dateEventEnd: ""
  },
  {
    id:4,
    name: "pause café",
    color: "blue",
    dateEventBegin: "15",
    dateEventEnd: ""
  }
];

export default {
  components: {},
  data() {
    return {
      planning: planning,
      selectedDateBegin: "20",
      selectedDateEnd: ""
    };
  },
  props: {
    session: {
      type: Object,
      required: true
    }
  }
};
</script>

