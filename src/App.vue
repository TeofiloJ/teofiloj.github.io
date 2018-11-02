<template>
  <div class="container-fluid" id="app">
    
    <NavBar v-on:sessionIsActive="sessionIsActive"/>

    <div class="row mt-3">      

      <div class="col-md-2">

        <SideBar v-bind:session='session'></SideBar>

      </div>

      <div class="col-md-10">

      <table class="table table-stripped">
        <thead>
          <tr>
            <td>Lundi</td>
            <td>Mardi</td>
            <td>Mercredi</td>
            <td>Jeudi</td>
            <td>Vendredi</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="p-2 border-left border-success">
                <p style="text-align:left">9h00</p> 
                <pre class="border mb-2 mt-2" style="background-color:orange; height:20%">12h midi 13h</pre> 
                <p style="text-align:left">17h00</p>
              </div>

            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      
      </table>
      

      

      </div>
      <span>date :</span>

    </div> 
    
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

const users = [
  {
    name : "jeandot",
    firstname : "teofilo",
    password : "bloup",
    mail : "teofilo.jeandot@ynov.com",
    address : "Nantes",
    birthDate : "1996/02/23",
    phone : "06 06 06 06 06",
    contract : {
      beginning : "2018/09/01",
      end : "2018/12/31",
      vacancyLeft : "23"
    },
    status : "salarié"
  },
   {
    name : "bar",
    firstname : "foo",
    password : "bloup",
    mail : "foo.bar@ynov.com",
    address : "Nantes",
    birthDate : "1996/02/23",
    phone : "06 06 06 06 06",
    contract : {
      beginning : "2018/09/01",
      end : "2018/12/31",
      vacancyLeft : "23"
    },
    status : "responsable"
  },
   {
    name : "michalon",
    firstname : "jack",
    password : "bloup",
    mail : "jack.michalon@ynov.com",
    address : "Nantes",
    birthDate : "1996/02/23",
    phone : "06 06 06 06 06",
    contract : {
      beginning : "2018/09/01",
      end : "2018/12/31",
      vacancyLeft : "23"
    },
    status : "drh"
  }        
]

export default {
  components: {
    NavBar, SideBar
  },
  name: 'app',
  data () {
    return {
      session : {
        user :  {
        name : "jeandot",
        firstname : "teofilo",
        password : "bloup",
        mail : "teofilo.jeandot@ynov.com",
        address : "Nantes",
        birthDate : "1996/02/23",
        phone : "06 06 06 06 06",
        contract : {
          beginning : "2018/09/01",
          end : "2018/12/31",
          vacancyLeft : "23"
        },
        status : "salarié"
        },
  
      },
    }
  },
  methods: {
    sessionIsActive: function(){
        if (this.session != null){
          console.log("true")
          return true
        }
        console.log("false")
        return false
        
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
