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
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    padding: 5px 5px 5px 5px; 
    background-color: #222;
    border-bottom: 1px solid #000;
    box-shadow: 0 2px 4px #666;
    color: #fefefe;
    .title{
        text-align: center;
        vertical-align: middle;
        margin-top: 10px;
    }
    .icon {
        cursor: pointer;
        width: 32px;
        height: 32px;
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;
    }
}
a:visited {
    text-decoration: none; 
}
</style>