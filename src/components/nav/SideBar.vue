<template>
    <transition name="show">
        <div class="sidebar" v-if="open">
            <transition-group appear name="fade">
                <a 
                    class="sidebar-element" 
                    v-for="(element, key, index) in navElements" 
                    :key="element[0]" 
                    :style="{'--index': index}"
                    :href="element[2]" >
                    <fa-icon 
                        class="icon" 
                        :icon="[element[0], element[1]]" 
                        size="2x" />
                </a>
            </transition-group>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SideBar',
    props: [
        'open'
    ],
    data() {
        return {
            // This dict takes the form of
            // [font-awesome prefix, icon, href]
            navElements: {
                navUser: ['fas', 'user', '#'],
                navTh: ['fas', 'th', '#'],
                navShare: ['fas', 'share-alt', '#'],
                navKofi: ['fas', 'coffee', 'https://ko-fi.com/sirwhy'],
                navGithub: ['fab', 'github', 'https://github.com/markanderson96'],
                navSettings: ['fas', 'cogs', '#']
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar{
        position: fixed;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        flex-direction: column;
        width: 60px;
        height: calc(100vh - 50px);
        margin-top: 50px;
        padding-top: 50px;
        background-color: rgba($color: #242424, $alpha: .6);

        .sidebar-element{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            margin-bottom: 8px;
            cursor: pointer;
            color: #fefefe;
            background-color: #242424;
        }
    }

    .show {
        &-enter, &-leave-to {
            opacity: 0;
            transform: translateX(-60px);
        }

        &-enter-active, &-leave-active {
            transition: all 500ms;
        }
    }

    .fade{
        &-enter {
            opacity: 0;
            transform: translateX(-60px);
        }

        &-enter-active {
            transition: all 500ms ease-in-out;
            transition-delay: calc(50ms * var(--index));
        }
    }
</style>