<template>
    <div class="game-controls">
        <select class="select-css" v-model="selectedTheme">
            <option disabled value>theme</option>
            <option v-for="(name, index) of themeNames" :key="index" :value="name">{{ name }}</option>
        </select>
        <button class="btn" @click="setCard" :disabled="hasNoTheme">new card</button>
        <button class="btn" @click="clearCard" :disabled="isClearCard">clear card</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "GameControls",
    data() {
        return {themes: [], selectedTheme: ""};
    },
    computed: {
        themeNames() {
            return this.themes.map(t => t.name);
        },
        hasNoTheme() {
            return this.selectedTheme ? false : true;
        },
        isClearCard() {
            return this.$store.state.boxesPlayed.length == 0 ? true : false;
        },
        isWon() {
            return this.$store.state.isWon;
        }
    },
    watch: {
        isWon() {
            let clearBtn = document.querySelector(".clearBtn");
            clearBtn.focus();
        }
    },
    methods: {
        fetchThemes() {
            axios.get("themes.json").then(response => (this.themes = response.data));
        },
        setTheme() {
            if (this.$store.state.currentTheme.name != this.selectedTheme) {
                for (let t of this.themes) {
                    if (t.name == this.selectedTheme) {
                        this.$store.commit("setCurrentTheme", t);
                    }
                }
            }
        },
        clearCard() {
            if (this.$store.state.boxesPlayed.length != 0) {
                this.$store.commit("clearBoxesPlayed");
            }
            if (this.$store.state.isWon) {
                this.$store.commit("unsetWin");
                this.setCard()
            }
        },
        setCard() {
            this.clearCard();
            this.setTheme();
            this.$store.commit("setGameBoxes");
        }
    },

    created() {
        this.fetchThemes();
    }
};
</script>

<style lang="scss" scoped>
.game-controls {
    text-align: center;
    color: var(--font-color-primary)
}

.select-css {
    font-size: 16px;
    height: 24px;
    font-weight: 400;
    vertical-align: middle;
    color: var(--font-color-primary);
    select {
        display: none; /*hide original SELECT element: */
        background-color: dimgrey;
    }
    option {
        color: var(--font-primary-color);
        background-color: darkgrey;
    }
}

.button {
    color: var(--font-color-primary);
    background-color: dimgrey;
}

.btn {
    background-color: darkgrey;
    color: var(--font-color-primary);
}
.btn:disabled {
    background-color: dimgrey;
}
</style>