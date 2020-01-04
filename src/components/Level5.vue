<template>
    <div id="level-header" class="centered noselect">
      <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="word-lvl5"
            style="animation-delay: 2s;"
            @click="pressBtn">Press me</div>
        </div>
        <div id="lvl5-pass"
        @click="nextLvl"
        v-if="btnPressed==28">Next level</div>
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
    name: 'Level5',
    data() {
        return {
          btnPressed: 0
        }
    },
    mounted() {
        setTimeout(this.startLvl, 3000);
    },
    methods: {
        gotoMain() {
            this.$parent.gotoMain();
        },
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            document.getElementById("lvl5-pass").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        pressBtn() {
            this.btnPressed ++;
            if(this.btnPressed == 1){
              document.getElementById("word-lvl5").innerHTML="Press me";
            }
            if(this.btnPressed == 5) {
              document.getElementById("word-lvl5").innerHTML="Don't stop";
            }
            if(this.btnPressed == 10) {
              document.getElementById("word-lvl5").innerHTML="Never give up";
            }
            if(this.btnPressed == 15) {
              document.getElementById("word-lvl5").innerHTML="You're getting close";
            }
            if(this.btnPressed == 20) {
              document.getElementById("word-lvl5").innerHTML="Just a little bit";
            }
            if(this.btnPressed == 25) {
              document.getElementById("word-lvl5").innerHTML="Last three times";
            }
            if(this.btnPressed == 28) {
              document.getElementById("word-lvl5").innerHTML="Stop";
            }
            if(this.btnPressed == 29) {
              document.getElementById("word-lvl5").innerHTML="Ooh, you messed up, try again";
              this.btnPressed = 0;
            }
        },
        startLvl() {
          this.$parent.startWatch();
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
  #word-lvl5 {
    font-size: 50px;
  }
}
@media screen and (min-width: 640px) {
  #word-lvl5 {
    font-size: 80px;
  }
}
@media screen and (min-width: 1000px) {
  #word-lvl5 {
    font-size: 100px;
  }
} 

#word-lvl5 {
    color:#1b1b1b;
    background-color:#1b1b1b;
    margin-top: 20vh;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 13px;
    display: inline-block;
    -webkit-animation: w-lvl5-fadeOut 3.0s forwards;
    animation: w-lvl5-fadeOut 3.0s forwards;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 1s ease-in-out; /** Firefox **/
    -o-transition: all 1s ease-in-out; /** Opera **/
}
@keyframes w-lvl5-fadeOut {
    100% {
        background-color:#ffa500;
    }
}
#lvl5-pass {
    cursor: pointer;
    position: relative; /* or absolute */
    margin-top: 500px;
    color: #1b1b1b;
    margin-left: auto;
    margin-right: auto;
    -webkit-animation: lvl5-p-fadeOut 2.0s forwards;
    animation: lvl5-p-fadeOut 2.0s forwards;
    animation-delay: 3.0s;
}
@keyframes lvl5-p-fadeOut {
  100% {
    color: white;
  }
}
</style>