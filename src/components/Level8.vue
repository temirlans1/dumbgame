<template>
    <div id="level-header" class="centered noselect">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl2-message" style="animation-delay: 2s;">
                Choose wisely
            </div>
            <div id="nl-1" class="nl-r1" 
            style="animation-delay: 2s">1</div>
            <div id="nl-2" class="nl-r1" 
            style="animation-delay: 2.2s">2</div>
            <div id="nl-3" class="nl-r1" 
            style="animation-delay: 2.4s">3</div>
            <div id="nl-4" class="nl-r1" 
            style="animation-delay: 2.6s">4</div>
            <div id="nl-5" class="nl-r1" 
            style="animation-delay: 2.8s">5</div>
            <div id="nl-6" class="nl-r2" 
            style="animation-delay: 3s">6</div>
            <div id="nl-7" class="nl-r2" 
            style="animation-delay: 3.2s">7</div>
            <div id="nl-8" class="nl-r2" 
            style="animation-delay: 3.4s">8</div>
            <div id="nl-9" class="nl-r2" 
            style="animation-delay: 3.6s">9</div>
            <div id="lvl2-message" style="animation-delay: 2s;">
                One mistake and you are back in time
            </div>
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
    name: 'Level8',
    data() {
        return {
        }
    },
    mounted() {
        setTimeout(this.startLvl, 4000);  
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        startLvl() {
            this.$parent.startWatch();
            document.getElementById("nl-1").addEventListener("click", this.$parent.goto1);
            document.getElementById("nl-2").addEventListener("click", this.$parent.goto2);
            document.getElementById("nl-3").addEventListener("click", this.$parent.goto3);
            document.getElementById("nl-4").addEventListener("click", this.$parent.goto4);
            document.getElementById("nl-5").addEventListener("click", this.$parent.goto5);
            document.getElementById("nl-6").addEventListener("click", this.$parent.goto6);
            document.getElementById("nl-7").addEventListener("click", this.$parent.goto7);
            document.getElementById("nl-8").addEventListener("click", this.$parent.goto8);
            document.getElementById("nl-9").addEventListener("click", this.nextLvl);
            
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
.nl-r1 {
  color:#1b1b1b;
  background-color:#1b1b1b;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 10px;
  margin-top: 50px;
  display: inline-block;
  -webkit-animation: nl-fadeOut 3.0s forwards;
  animation: nl-fadeOut 3.0s forwards;
  
}
.nl-r2 {
  color:#1b1b1b;
  background-color:#1b1b1b;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 10px;
  margin-top: 100px;
  display: inline-block;
  -webkit-animation: nl-fadeOut 3.0s forwards;
  animation: nl-fadeOut 3.0s forwards;
}
@keyframes nl-fadeOut {
  100% {
      background-color:#ffa500;
  }
}

</style>