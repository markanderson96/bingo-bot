<template>
  <div id="App">
    <div class="nav">
      <TopBar @togglenav="navOpen = !navOpen" />
      <SideBar :open="navOpen" />
    </div>
    <div class="game">
      <GameControls />
      <GameBoard />
      <GameStatus />
    </div>
    <div class="nav">
      <BottomBar />
    </div>
  </div>
</template>

<script>
import TopBar from './components/nav/TopBar.vue'
import SideBar from './components/nav/SideBar.vue'
import BottomBar from './components/nav/BottomBar.vue'

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
    BottomBar,
    GameBoard,
    GameStatus,
    GameControls,
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
  #app {
    width: 100%;
    min-height: 100vh;
  }
  .nav {
    position: absolute;
  }
  .game {
    min-height: 100vh;
    padding-top: 60px;
    align-self: center;
    background: url('./assets/app_bg.png') center center;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
</style>
