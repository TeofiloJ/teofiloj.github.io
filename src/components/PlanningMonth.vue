<template>

     <div class="col ml-3 ">
            <div class="">
              <div class="row">
                  <div class="col">L</div>
                  <div class="col">M</div>
                  <div class="col">M</div>
                  <div class="col">J</div>
                  <div class="col">V</div>
                  <div class="col">S</div>
                  <div class="col">D</div>
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

              <!-- End Week 1 -->
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

              <!-- End Week 2 -->
              <div v-else class="row mb-2">
                 <div class=" col" v-for="event in this.planningSorted.slice(28 - this.startBuffer, parseInt($moment(this.endOfMonth).format('D') ))">
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
            <!-- Liste events du jour selectionné-->
            <div class="mt-3">
              <div class="row border-bottom mb-1 pb-1" v-for="event in this.eventsList">
                <div :class="['col-xs-2', 'ml-3', 'mr-3', 'pr-3', 'border-right', 'border-'+ event.type]"><b>{{$moment(event.dateEventBegin).format('HH:mm') }}</b><br>{{$moment(event.dateEventEnd).format('HH:mm') }} </div>
                
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
      endBuffer: 0,
      eventsList : [{
          id: 1,
          name: "rendez vous médecin",
          userId: 1,
          dateEventBegin: "2018-11-05T08:00",
          dateEventEnd: "2018-11-05T09:00",
          type: "warning"
        },
        {
          id: 2,
          name: "mise en prod",
          userId: 1,
          dateEventBegin: "2018-11-05T09:00",
          dateEventEnd: "2018-11-05T11:00",
          type: "info"
        }
      ]
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
            this.planningSorted[this.getDayOfMonth(event.dateEventBegin) - 1].events.push(event) 
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
            nbEvents: 0,
            events : []
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





