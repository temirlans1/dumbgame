<template>
    <div id="level-header" class="centered noselect"
    style="position: fixed;">
    <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
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
    mounted() {
        setTimeout(this.$parent.startWatch, 3000);  
    },
    methods: {
        gotoMain() {
            this.$parent.gotoMain();
        },
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
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
    #catch-me {
        -webkit-animation: c-m-anim 1.0s infinite;
        animation: c-m-anim 1.0s infinite;
    }
}
@media screen and (min-width: 640px) {
    #catch-me {
        -webkit-animation: c-m-anim 1.5s infinite;
        animation: c-m-anim 1.5s infinite;
    }
}
@media screen and (min-width: 1000px) {
    #catch-me {
        -webkit-animation: c-m-anim 2.0s infinite;
        animation: c-m-anim 2.0s infinite;
    }
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