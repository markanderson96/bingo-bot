<template>
  <div class="game-box">
    <input
      type="checkbox"
      :id="boxIdentifier"
      :value="boxId"
      :checked="isChecked"
      :disabled="this.$store.state.isWon"
      @change="toggleBox(boxId)"
    />
    <label :for="boxIdentifier">{{boxDisplay}}</label>
  </div>
</template>

<script>
export default {
  name: "GameBox",
  props: {
    boxId: Number,
    boxContent: String
  },
  computed: {
    boxIdentifier() {
      return "box-" + this.boxId;
    },
    boxDisplay() {
      if (this.boxId == 12) {
        return "FREE SPACE"
      }
      else {
        return this.boxContent;
      }
    },
    isChecked() {
      return this.$store.state.boxesPlayed.includes(this.boxId) ? true : false;
    }
  },
  methods: {
    toggleBox(id) {
      this.$store.dispatch("toggleBox", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.game-box {
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid;
  overflow: hidden;
  color: var(--font-color-primary)
}

input[type="checkbox"] {
  opacity: 0;

  & + label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-wrap: normal;
    font-size: 1em;
    padding: 5px;
    border: 5px solid transparent;
    background-color: var(--color-bg-secondary);
    color: var(--font-color-primary)
  }

  &:checked + label {
    background: var(--active-color);
    border: 2px solid transparent;
    border-color: #E75E43;
    font-weight: bolder;
  }

  &:focus + label {
    border-color: var(--focus-color);
  }
}
</style>