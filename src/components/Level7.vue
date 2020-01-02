<template>
    <div id="level-header" class="centered noselect"
    style="position: fixed;">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl2-message" style="animation-delay: 2s;">
                You took the chance. Its fine
            </div>
            <div id="lvl2-message" style="animation-delay: 2s;">
                but can you catch the time?
            </div>
            <div id="catch-me"
            @click="nextLvl()">Time</div>
        </div>
        
        <div class="success-checkmark">
            <div id="lvl-passed">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Level7',
    data() {
        return {
        }
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            setTimeout(this.$parent.increaseLevel, 2000);
        }
    },
    computed: {
        level() {
            return this.$parent.currentLevel
        }
    }
}

</script>
<style>

@media screen and (min-width: 320px) {
}
@media screen and (min-width: 640px) {
}
@media screen and (min-width: 1000px) {
} 
#catch-me  {
    position: absolute;
    color:#1b1b1b;
    background-color:#ffa500;
    margin-top: 20vh;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 13px;
    left: -50vw;
    display: inline-block;
    -webkit-animation: c-m-anim 1.0s infinite;
    animation: c-m-anim 1.0s infinite;
    animation-delay: 5s;
    animation-direction: alternate;
    animation-timing-function: linear;
}
@keyframes c-m-anim {
    100% {
      margin-left: 160vw;
    }
}
</style>