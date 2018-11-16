<template>

     <div class="col ml-3 border">
            <div class="">
              <div class="row">
                  <div class="col">Lundi</div>
                  <div class="col">Mardi</div>
                  <div class="col">Mercredi</div>
                  <div class="col">Jeudi</div>
                  <div class="col">Vendredi</div>
                  <div class="col">Samedi</div>
                  <div class="col">Dimanche</div>
              </div>
              <!-- First Week -->
              <div class="row mb-2">
                <div class="col" v-for="(n, i) in this.startBuffer">
                  <div class="border buffer ">-</div>                  
                </div>
                <div class="col" v-for="event in this.planningSorted.slice(0, 7 - this.startBuffer)">
                  <div class="border task" v-b-popover.hover="'nombre de tâches : ' + event.nbEvents" title="Détail journée" v-if="event.nbEvents != 0">
                    {{event.jour}}
                  </div>
                  <div v-else class="noTask" >
                    {{event.jour}}
                  </div>
                </div>
              </div>
              <!-- Next Weeks -->
              <div class="row mb-2">
                <div class=" col" v-for="event in this.planningSorted.slice(7 - this.startBuffer, 14 - this.startBuffer)">
                  <div class="border task" v-b-popover.hover="'nombre de tâches : ' + event.nbEvents" title="Détail journée" v-if="event.nbEvents != 0">
                    {{event.jour}}
                  </div>
                  <div v-else class="noTask">
                    {{event.jour}}
                  </div>
                </div>
              </div>

              <div class="row mb-2">  
                <div class="col" v-for="event in this.planningSorted.slice(14 - this.startBuffer, 21 - this.startBuffer)">
                  <div class="border task" v-if="event.nbEvents != 0"  v-b-popover.hover="'nombre de tâches : ' + event.nbEvents" title="Détail journée">
                    {{event.jour}}
                  </div>
                  <div v-else class="noTask">
                    {{event.jour}}
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class=" col" v-for="event in this.planningSorted.slice(21 - this.startBuffer, 28 - this.startBuffer)">
                  <div class="border task" v-if="event.nbEvents != 0" v-b-popover.hover="'nombre de tâches : ' + event.nbEvents" title="Détail journée">
                    {{event.jour}}
                  </div>
                  <div v-else class="noTask">
                    {{event.jour}}
                  </div>
                </div>
              </div>

              <!-- End Week -->
              <div v-if="this.endBuffer == 6" class="">
                <div class="row mb-2">
                  <div class="  col" v-for="event in this.planningSorted.slice(28 - this.startBuffer, parseInt(this.$moment(this.endOfMonth).format('D')  - 1))">
                    <div class=" border task" v-if="event.nbEvents != 0" v-b-popover.hover="'nombre de tâches : ' + event.nbEvents" title="Détail journée">
                      {{event.jour}}
                    </div>
                    <div v-else class="noTask">
                      {{event.jour}}
                    </div>
                  </div>
                </div>
                <div class="row mb-2">
                  <div v-if="this.planningSorted[this.planningSorted.length - 1].nbEvents == 0" class="col" >
                    <div class="noTask border ">{{this.planningSorted[this.planningSorted.length - 1].jour}}</div>
                  </div>
                  <div v-else v-b-popover.hover="'nombre de tâches : ' + this.planningSorted[this.planningSorted.length - 1].nbEvents" title="Détail journée">
                     <div class="task border ">{{this.planningSorted[this.planningSorted.length - 1].jour}}</div>
                  </div>
                  <div class="col" v-for="(n, i) in this.endBuffer">
                    <div class="buffer border">-</div> 
                  </div>
                </div>
                
                
              </div>

              <!-- End Week -->
              <div v-else class="row mb-2">
                 <div class=" col" v-for="event in this.planningSorted.slice(28 - this.startBuffer, parseInt(this.$moment(this.endOfMonth).format('D') ))">
                  <div class="border task" v-if="event.nbEvents != 0" v-b-popover.hover="'nombre de tâches : ' + event.nbEvents" title="Détail journée">
                    {{event.jour}}
                  </div>
                  <div v-else class="noTask">
                    {{event.jour}}
                  </div>
                </div>
                <div class="col" v-for="(n, i) in this.endBuffer">
                  <div class="buffer border">-</div>
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
      planningSorted : [],
      selectedUserId: "",
      beginOfMonth: "",
      endOfMonth :"",
      startBuffer: 0,
      endBuffer: 0
    };
  },
  created() {
    // Using the service bus
    EventBus.$on('setSelectedMonth', (selectedMonth, selectedUserId) => {
      this.startBuffer = 0
      this.endOfMonth = 0
      this.selectedUserId = selectedUserId
      this.beginOfMonth = this.$moment(selectedMonth).format('YYYY-MM-DDTHH:mm');
      this.endOfMonth = this.$moment(this.beginOfMonth).add('months', 1).subtract('days', 1).format('YYYY-MM-DDTHH:mm')

      
      if(this.$moment(this.beginOfMonth).weekday() != "1"){
        this.startBuffer = parseInt(this.$moment(this.beginOfMonth).weekday() - 1)
      }else{
        this.startBuffer = 0
      }
      if(this.$moment(this.endOfMonth).weekday() != "0"){
        this.endBuffer = 7 - parseInt(this.$moment(this.endOfMonth).weekday())
      }else{
        this.endBuffer = 0
      }

      this.renderPlanning()
    });
  },
  methods:{
    renderPlanning:function(){

      this.initPlanningSorted()

      this.planning.forEach(event => {
        if(event.userId == this.selectedUserId){
          if(this.$moment(event.dateEventBegin).format('YYYY-MM') == this.$moment(this.beginOfMonth).format('YYYY-MM')){
            this.planningSorted[this.getDayOfMonth(event.dateEventBegin) - 1].nbEvents ++ 
            //console.log("render " +event.dateEventBegin + " - " + this.planningSorted[this.getDayOfMonth(event.dateEventBegin)])
          }else{            
            //console.log("event name : " + event.name + " | debut event " + this.$moment(event.dateEventBegin).format('YYYY-MM') + " | debut mois " + this.$moment(this.beginOfMonth).format('YYYY-MM'))
          }            
        }
      });
    },
    getDayOfMonth:function(date){
      return parseInt(this.$moment(date).format('DD'))
    },
    initPlanningSorted:function(){
      this.planningSorted = []
      for(var i = 1; i < 32; i++){
        this.planningSorted.push(
          {
            jour: i,
            nbEvents: 0
          }
        )
      }
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

<style>

.buffer{
  background-color: lightgray
}

.task{
  background-color: lightsalmon
}

.noTask{
  background-color: lightgreen
}

</style>





