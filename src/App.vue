<template>
  <div id="App">
    <div class="nav">
      <TopBar @togglenav="navOpen = !navOpen" />
      <SideBar :open="navOpen" />
    </div>
    <div class="Game">
      <GameStatus />
      <GameControls />
      <GameBoard />
    </div>
  </div>
</template>

<script>
import TopBar from './components/nav/TopBar.vue'
import SideBar from './components/nav/SideBar.vue'

import GameBoard from "./components/bingo/GameBoard"
import GameControls from "./components/bingo/GameControls"
import GameStatus from "./components/bingo/GameStatus"
import { store } from "@/store/store";
import { mapGetters } from "vuex";
import bp from "./utils/breakpoints"

export default {
  name: 'App',
  store,
  components: {
    TopBar,
    SideBar,
    GameBoard,
    GameStatus,
    GameControls
  },
  computed: {
    ...mapGetters(["screenAtLeast", "screenUnder"])
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.$store.commit("setScreenWidth", window.innerWidth);
    });
  },
  data() {
      return {
          navOpen: false,
          bp
      };
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app {
    width: 100%;
    min-height: 100vh;
  }
  .nav {
    position: absolute;
  }
  .game {
    position: absolute;
  }
</style>
