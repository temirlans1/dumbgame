<template>
    <div id="start-anim" class="centered">
        <div id="word-level">Level 1</div>
    </div>
</template>

<script>
export default {
    name: 'Level1',
    data() {
        return {
            hovered_d: false,
            hovered_b: false,
            dpos: 0
        }
    }
}

</script>
<style>
html,
body {
    background-color: #1b1b1b
}

#word-level {
    cursor: pointer;
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    font-size: 100px;
    margin-top: -250px;
    margin-left: -350px;
    color: white;
}
</style>