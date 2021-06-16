import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faUser, faCogs, faTh, faShareAlt, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faUser, faCogs, faTh, faShareAlt, faCoffee, faGithub)

Vue.component('fa-icon', FontAwesomeIcon)