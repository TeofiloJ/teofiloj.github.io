<template>
  <div class="container-fluid" id="app">
    
    <div v-if="session.isActive" >
        <NavBarOnline v-on:logout="logout" v-bind:session='session'/>
    </div>
    <div v-else>
        <NavBarOffline v-on:login="login" v-bind:session='session'/>
    </div>
    <Alerts v-bind:alert='alert' />
    
    <div class="row mt-3" v-if="session.isActive" >
       
        <div style="background-color:light-gray" class="col-md-2 border">
           <SideBar v-bind:session='session'></SideBar>
        </div>

        <div class="col-md-10">
            <planning v-bind:session='session' />
        </div>

    </div>
    <div class="row mt-3" v-else>
        <div class="col-md-12">
        </div>
    </div>
    

    
  </div>
</template>

<script>

import NavBarOnline from './components/NavBarOnline.vue'
import NavBarOffline from './components/NavBarOffline.vue'
import SideBar from './components/SideBar.vue'
import Planning from './components/Planning.vue'
import Alerts from './components/Alerts.vue'

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
    NavBarOnline, NavBarOffline, SideBar, Planning, Alerts
  },
  name: 'app',
  data () {
    return {
      alert : "",
      users: users,
      session : {
        isActive: false
      },
    }
  },
  methods: {
    sessionIsActive: function(){
        if (this.session.isActive){
          console.log("true")
          return true
        }
        console.log("false")
        return false        
    },
    login:function(formEmail, formPassword){
      console.log("login")
      var found = false
      var i = 0
      while(i < users.length && !found){
          console.log("fE :" + formEmail + " fP : " + formPassword)
          console.log("bE :" + users[i].mail + " bP : " + users[i].password)
          if(users[i].mail == formEmail && users[i].password == formPassword){
            
            found = true
          }else{
            i++
          }        
      }
      if (found){
        this.session = {
            isActive: true,                
            user :  users[i]
        }
      }else{
        alert = "Bad email or password"
      }
          
    },
    logout:function(){
        this.session = {
            isActive: false
        }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
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
