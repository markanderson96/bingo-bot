<template>
    <div class="topbar">
        <div>
            <fa-icon 
                class="icon" 
                :icon="['fas', 'bars']" 
                size="2x" 
                @click="$emit('togglenav')" 
            />
        </div>
        <div>
            <h1 class="title">its bingo innit</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
}
</script>

<style lang="scss" scoped>
.topbar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    padding: 5px 5px 5px 5px; 
    background-color: #222;
    border-bottom: 1px solid #000;
    color: #fefefe;
    .title{
        text-align: center;
        vertical-align: middle;
        margin-top: 0;
        margin-right: 16px;
        color: var(--font-color-secondary);
    }
    .icon {
        cursor: pointer;
        width: 32px;
        height: 32px;
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;
        color: var(--font-color-secondary);
    }
}
a:visited {
    text-decoration: none; 
}
</style>