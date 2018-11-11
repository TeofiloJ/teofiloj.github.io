<template>
    <div>
        <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                gta-ynov-vue
            </a>
            <ul>
                <li>Aide</li>
                <li><b-btn v-b-modal.modal-center.login class="btn-success">Login</b-btn></li>
            </ul>
        </nav>
            <b-modal hide-footer title="Login" id="login">
             <form action="">
                 <input type="email" name="email" id="email" placeholder="email" v-model="formEmail">
                 <input type="password" name="password" id="password" placeholder="password" v-model="formPassword">
                 <b-btn v-on:click="$emit('login',formEmail,formPassword)">Login</b-btn>
             </form>
            </b-modal>
        
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        formEmail: "teofilo.jeandot@ynov.com",
        formPassword: "bloup"
    };
  },
  methods: {
    sessionIsActive: function() {},
    redirect: function() {}
  }
};
</script>