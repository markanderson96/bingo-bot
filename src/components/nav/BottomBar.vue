<template>
    <div class="bottombar">
        <div>
            <h1 class="title">
                <a href="https://markanderson96.github.io">designed by mark (sirwhy)</a>
            </h1>  
        </div>
        <div>
            <h1 class="title">beta version 0.2</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottomBar',
}
</script>

<style lang="scss" scoped>
.bottombar {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
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
        a {
            text-decoration: none;
        }
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