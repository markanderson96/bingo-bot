import Vue from "vue";
import Vuex from "vuex";
import wins from "@/utils/wins";
import shuffle from "@/utils/shuffle.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		screenWidth: null,
		currentTheme: {},
		gameBoxes: [],
		boxesPlayed: [],
		isWon: false,
		corners: false,
		line: false,
		cross: false
	},
	mutations: {
		setScreenWidth(state, value) {
			state.screenWidth = value;
		},
		setCurrentTheme(state, theme) {
			state.currentTheme = theme;
		},
		setGameBoxes(state) {
			let shuffledOptions = shuffle(state.currentTheme.options.slice());
			// select only 25 values
			state.gameBoxes = shuffledOptions.slice(0, 25);
			state.boxesPlayed.push(12);
		},
		addBox(state, id) {
			state.boxesPlayed.push(id);
		},
		removeBox(state, id) {
			state.boxesPlayed.splice(state.boxesPlayed.indexOf(id), 1);
		},
		clearBoxesPlayed(state) {
			state.boxesPlayed = [];
		},
		setWin(state) {
			state.corners = false;
			state.line = false;
			state.cross = false;
			state.isWon = true;
		},
		unsetWin(state) {
			state.corners = false;
			state.line = false;
			state.cross = false;
			state.isWon = false;
		},
		setCorners(state) {
			state.corners = true;
			state.line = false;
			state.cross = false;
			state.isWon = false;
		},
		setLine(state) {
			state.corners = false;
			state.line = true;
			state.cross = false;
			state.isWon = false;
		},
		setCross(state) {
			state.corners = false;
			state.line = false;
			state.cross = true;
			state.isWon = false;
		}
	},
	getters: {
		screenAtLeast(state) {
			return w => state.screenWidth >= w;
		},
		screenUnder(state) {
			return w => state.screenWidth < w;
		}
	},
	actions: {
		toggleBox({ commit, dispatch }, id) {
			if (this.state.boxesPlayed.includes(id)) {
				commit("removeBox", id);
			} else {
				commit("addBox", id);
				dispatch("checkForWin");
			}
		},
		checkForWin({ commit }) {
			for (const [key, value] of Object.entries(wins)) {
				for (const n of Array(Object.keys(value).length).keys()) {
					if (value[n].every(v => this.state.boxesPlayed.includes(v))) {
						if (key == "four_corners"){
							commit("setCorners")
							break;
						}
						else if (key == "lines"){
							commit("setLine");
							break;
						}
						else if (key == "cross"){
							commit("setCross");
							break;
						}
						else{
							commit("setWin");
							break;
						}
					}
				}
			}
		}
	}
});