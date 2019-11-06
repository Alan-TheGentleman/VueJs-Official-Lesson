<template>
  <div>
    THIS IS THE SECOND COMPONENT
    <div v-for="(value, index) in coins" :key="index">{{value.name}} - {{value.rate}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["coins"])
  }
};
</script>
