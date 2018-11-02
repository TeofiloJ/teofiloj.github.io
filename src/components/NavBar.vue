<template>
	<nav v-if="$emit('sessionIsActive')" class="navbar sticky-top navbar-light bg-light">
         <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            gta-ynov-vue
        </a>
        <ul>
            <li>Aide</li>
            <li><button class="btn btn-danger">Deconnexion</button></li>
        </ul>
        
    </nav>
    <nav v-else class="navbar sticky-top navbar-light bg-light">
       <a class="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            gta-ynov-vue
        </a>
        <ul>
            <li>Aide</li>
            <li><button class="btn btn-success">Connexion</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>