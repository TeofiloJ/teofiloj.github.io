<template>

     <div class="col ml-3 border">
        <div class="row">
            <div class="col">
                <span>Lundi</span>                  
                <div v-for='event in planning'>
                    <div v-if="event.dateEventBegin < selectedDateBegin">
                        <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <pre class="border mb-2 mt-2" style="background-color:white; height:20%">{{event.name}}</pre>
                        </a>


                            
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
const planning = [
  {
    name: "rendez vous médecin",
    color: "blue",
    dateEventBegin: "15",
    dateEventEnd: ""
  },
  {
    name: "mise en prod",
    color: "blue",
    dateEventBegin: "20",
    dateEventEnd: ""
  },
  {
    name: "réunion fin de projet",
    color: "blue",
    dateEventBegin: "15",
    dateEventEnd: ""
  },
  {
    name: "montage vidéo",
    color: "blue",
    dateEventBegin: "29",
    dateEventEnd: ""
  },
  {
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

