<template>

    <div v-if="$emit('isSessionActive')">

        {{session}}
<!--
        <div v-if="">
                <h1>IF</h1>

        </div>
        <div v-else-if="this.session.user.mail == 'LOL' ">
                <h1> ELSEIF</h1>
        </div>
        <div v-else>
                <h1> ELSE</h1>
        </div>

    </div>
    <div v-else>
        <form>
          <div class="form-group">
            <label for="periode_start">Période du plannning</label>
            <br/>
            <input type="date" id="periode_start">
            <input type="date" v-model="test" id="periode_end">
          </div>
        </form>
    </div>
	-->
    </div>

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