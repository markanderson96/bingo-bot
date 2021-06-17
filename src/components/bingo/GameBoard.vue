<template>
    <div class="game-board">
        <h1 class="game-name">
            {{this.$store.state.currentTheme.name}}
            bingo
        </h1>
        <div class="grid-coord">
            <div class="bingo-letters" aria-hidden="true">
                <span>&#8203;</span>
                <span>a</span>
                <span>b</span>
                <span>c</span>
                <span>d</span>
                <span>e</span>
            </div>
            <div class="bingo-numbers" aria-hidden="true">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
        <div class="game-grid">
        <GameBox
            v-for="(box, index) in this.$store.state.gameBoxes"
            :key="index"
            :box-id="index"	
            :box-content="box"
        ></GameBox>
        </div>
    </div>
</template>

<script>
import GameBox from "./GameBox.vue";

export default {
  name: "GameBoard",
  components: {
    GameBox
  }
};
</script>

<style lang="scss" scoped>
.game-board {
    position: relative;
    width: 100vw;
    max-width: 650px;
    margin: 1em auto;
    background-color: var(--color-bg-secondary);
    padding: 1em;
}
.game-name {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
}
.grid-coord{
    text-align: left;
    align-items: left;
    margin-top: 0;
    margin-bottom: 0;
}
.bingo-letters {
    display: flex;
    span {
        flex: 1;
        font-weight: bold;
        font-size: 2em;
    }
}
.bingo-numbers{
    display: flex;
    flex-direction: column;
    float: left;
    text-align: top;
    align-items: top;
    height: 560px;
    span {
        flex: 1;
        font-weight: bold;
        font-size: 2em;
    }
}
.game-grid {
    position: relative;
    left: 24px;
    border: 1px solid;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
    width: 90%;
    &::before {
        content: "";
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }
    & > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }
}
</style>