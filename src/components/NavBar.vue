<template>
<div v-if="sessionIsActive">
	<nav class="navbar sticky-top navbar-light bg-light">
         <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            gta-ynov-vue
        </a>
        <ul>
            <li>Aide</li>
            <li><button v-on:click="login" class="btn btn-danger">Deconnexion</button></li>
        </ul>
        
    </nav>
    </div>
    <div v-else>
    <nav class="navbar sticky-top navbar-light bg-light">
       <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            gta-ynov-vue
        </a>
        <ul>
            <li>Aide</li>
            <li><button v-on:click="logout" class="btn btn-success">Connexion</button></li>
        </ul>
    </nav>

    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
      sessionIsActive:function(){
          $emit('login')
      },
      redirect:function(){

      },
      login:function(){

      },
      logout:function(){
          session = {}
          redirect()
      }
  }
};
</script>