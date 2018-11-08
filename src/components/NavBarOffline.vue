<template>
    <nav class="navbar sticky-top navbar-light bg-light">
       <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            gta-ynov-vue
        </a>
        <ul>
            <li>Aide</li>
            <li><button v-on:click="$emit('login')" class="btn btn-success">Connexion</button></li>
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
      },
      redirect:function(){

      }
  }
};
</script>