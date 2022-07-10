<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      message: ""
    };
  },

  methods: {
    something() {
      fetch('http://localhost:43210/', {
        headers: { 
          'Content-type': 'application/json',
        }
      }).then((res) => res.json()).then((response) => {
        this.message = response;

        console.log(this.message);
      });
    }
  },
});
</script>

<template>
  <div class="greetings">
    <button @click="this.something()">GET</button>
  </div>
</template>

<style scoped>
</style>
