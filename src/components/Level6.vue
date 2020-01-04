<template>
    <div id="level-header" class="centered noselect">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl2-message" style="animation-delay: 2s;">
                When the moment comes
            </div>
            <div id="lvl2-message" style="animation-delay: 2s;">
                do not miss the chance
            </div>
            <div id="chance"
            @click="nextLvl()"
            v-if="hidden==false">Chance</div>
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
    name: 'Level6',
    data() {
        return {
            hidden: true
        }
    },
    mounted() {
        setTimeout(this.$parent.startWatch, 3000);  
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        hideChance() {
            this.hidden = true;
            setTimeout(this.showChance, 5000);
        },
        showChance() {
            this.hidden = false;
            setTimeout(this.hideChance, 500);
        }
    },
    computed: {
        level() {
            this.hideChance();
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
#chance  {
    position: absolute;
    color:#1b1b1b;
    background-color:#ffa500;
    margin-top: 20vh;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 13px;
    display: inline-block;
}
</style>