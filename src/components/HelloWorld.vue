<template>
  <div>
    <h1>Hola Vue Developers! {{ nombre }}</h1>
    <StateLess :modifiedProp="modifiedProp"></StateLess>
    <h1>Hola Vue Developers! (UpperCase) {{ upperCaseNombre }}</h1>

    <v-btn text @click="sayMyName()">
      <span class="mr-2">Modify Name !</span>
    </v-btn>
    <v-btn text @click="addCoinToState()">
      <span class="mr-2">Add Coin !</span>
    </v-btn>
    <v-btn text @click="deleteCoinInState()">
      <span class="mr-2">Delete Coin !</span>
    </v-btn>
  </div>
</template>

<script>
import StateLess from "./StateLess.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: { StateLess },
  props: {
    primeraPropiedad: String,
    segundaPropiedad: String
  },
  data: () => ({
    nombre: "George",
    people: [
      {
        name: "Alan",
        lastName: "Buscaglia"
      },
      {
        name: "George",
        lastName: "Washington"
      },
      {
        name: "Lucifer",
        lastName: "MorningStar"
      }
    ]
  }),
  methods: {
    sayMyName: function() {
      alert("Se ha cambiado el nombre");
      this.nombre = "Alan";
      this.people = this.people.map(p => ({
        ...p,
        name: p.name.toUpperCase()
      }));
    },
    addCoinToState: function() {
      this.$store.dispatch("addCoin", { name: "RICARDO", rate: 1000000 });
    },
    deleteCoinInState: function() {
      this.$store.dispatch("deleteCoin", "RICARDO");
    }
  },
  computed: {
    upperCaseNombre: function() {
      return this.nombre.toUpperCase();
    },
    peopleNames: function() {
      return this.people.map(p => p.name);
    },
    peopleLastNames: function() {
      return this.people.map(p => p.lastName);
    },
    modifiedProp: function() {
      return this.primeraPropiedad.toUpperCase();
    },
    ...mapGetters(["coins"])
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        console.log(response);
        this.$store.dispatch("addCoins", [
          { name: "EU", rate: 70 },
          { name: "US", rate: 68 }
        ]);
      });
  }
};
</script>
