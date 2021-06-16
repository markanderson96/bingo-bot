<template>
  <div class="game-status">
    <p v-if="this.$store.state.corners">four corners, better than nothing</p>
    <p v-if="this.$store.state.line">oooh nice a line!</p>
    <p v-if="this.$store.state.cross">thats a cross, pretty poggers</p>
    <p v-if="this.$store.state.isWon">wegotta number one victory royale</p>
  </div>
</template>

<script>
export default {
  name: "GameStatus"
};
</script>

<style lang="scss" scoped>
.game-status {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 3em;
}
</style>