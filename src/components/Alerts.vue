<template>
    <div >
        <div v-if="alert !='' ">
            <b-alert show dismissible>
                {{alert}}
            </b-alert>
        </div>
        <div v-else>
            
        </div>

    </div>
</template>

<script>
export default {
  components: {},
    data() {
        return {
            
        };
    },
    methods: {
        
    },
    props: {
        alert: String
    }
};
</script>