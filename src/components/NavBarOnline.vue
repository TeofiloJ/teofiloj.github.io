<template>

    <nav class="navbar sticky-top navbar-light bg-light">
         <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            gta-ynov-vue
        </a>
        <div v-if="session.user.status == 'salarié'">
            <ul>
                <li><a href="#">Salarié</a></li>
                <li><a href="#">Boutton</a></li>
            </ul>
        </div>
        <div v-if="session.user.status == 'responsable'">
            <ul>
                <li><a href="#">Responsable</a></li>
                <li><a href="#">Boutton</a></li>
            </ul>
        </div>
        <div v-if="session.user.status == 'drh'">
            <ul>
                <li><a href="#">DRH</a></li>
                <li><a href="#">Boutton</a></li>
            </ul>
        </div>
        <ul>
            <li>Aide</li>
            <li><button v-on:click="$emit('logout')" class="btn btn-danger">Deconnexion</button></li>
        </ul>   
        
             
    </nav>

</template>

<script>



export default {
  components: {},
  data() {
    return {};
  },
  props: {
    session: {
      type: Object,
      required: true
    }
  }

};
</script>

