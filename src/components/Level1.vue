<template>
    <div id="level-header" class="centered noselect">
        <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl1-message" style="animation-delay: 2s;">
                This level is very easy            
            </div>
            <div id="lvl1-message" style="animation-delay: 4s; display:inline-block;">
                Just find the
            </div>
            <div class="play-btn"
            @click="nextLvl"></div>
            <div id="word-play" style="animation-delay: 4s;">play</div>
            <div id="lvl1-message" style="animation-delay: 4s; display:inline-block;">
                button somewhere in the screen
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
    name: 'Level1',
    data() {
        return {
            hovered_play: false
        }
    },
    mounted() {
      setTimeout(this.letMove, 6000);
    },
    methods: {
        gotoMain() {
            this.$parent.gotoMain();
        },
        movePlay() {
            var n = document.getElementById("word-play");
            if(this.hovered_play == false){
                n.classList.add("w-n-move");
                this.hovered_play = true;
            } else {
                n.classList.remove("w-n-move");
                this.hovered_play = false;
            }
        },
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        letMove() {
            document.getElementById("word-play").addEventListener("click", this.movePlay);
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
  #level-header {
    font-size: 30px;
  }
  #level-message {
      font-size: 30px;
  }
  .play-btn {
    width: 20px;
    height: 20px;
    border-width: 10px 0px 10px 20px;
  }
  #word-play {
    margin-left: -35px;
  }
  .w-n-move {
    transform: translate(+30px,0);
    -webkit-transform: translate(+30px,0); /** Safari & Chrome **/
    -o-transform: translate(+30px,0); /** Opera **/
    -moz-transform: translate(+30px,0); /** Firefox **/
    }
}
@media screen and (min-width: 640px) {
  #level-header {
    font-size: 50px;
  }
  #level-message {
      font-size: 50px;
  }
  .play-btn {
    width: 30px;
    height: 30px;
    border-width: 15px 0px 15px 30px;
  }
  #word-play {
    margin-left: -40px;
  }
  .w-n-move {
    transform: translate(+35px,0);
    -webkit-transform: translate(+35px,0); /** Safari & Chrome **/
    -o-transform: translate(+35px,0); /** Opera **/
    -moz-transform: translate(+35px,0); /** Firefox **/
}
}
@media screen and (min-width: 1000px) {
  #level-header {
    font-size: 80px;
  }
  #level-message {
    font-size: 70px;
  }
  .play-btn {
    width: 50px;
    height: 50px;
    border-width: 25px 0px 25px 50px;
  }
  #word-play {
    margin-left: -60px;
  }
  .w-n-move {
    transform: translate(+60px,0);
    -webkit-transform: translate(+60px,0); /** Safari & Chrome **/
    -o-transform: translate(+60px,0); /** Opera **/
    -moz-transform: translate(+60px,0); /** Firefox **/
    }
} 

#word-play {
    color:#1b1b1b;
    background-color:#1b1b1b;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 13px;
    display: inline-block;
    -webkit-animation: w-n-fadeOut 3.0s forwards;
    animation: w-n-fadeOut 3.0s forwards;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 1s ease-in-out; /** Firefox **/
    -o-transition: all 1s ease-in-out; /** Opera **/
}
@keyframes w-n-fadeOut {
    100% {
        background-color:#ffa500;
    }
}

#lvl1-message {
    margin-top: 100px;
    color:#1b1b1b;
    -webkit-animation: lvl1-m-fadeOut 3.0s forwards;
    animation: lvl1-m-fadeOut 3.0s forwards;
}
@keyframes lvl1-m-fadeOut {
  100% {
    color: white;
    margin-top: 50px; 
  }
}
.play-btn {
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    border-style: solid;
    box-sizing: border-box;
    border-color: transparent transparent transparent #ffa500;
    -webkit-animation: p-btn-fadeOut 3.0s forwards;
    animation: p-btn-fadeOut 3.0s forwards;
}
@keyframes p-btn-fadeOut {
  100% {
    color: white;
    margin-top: 50px; 
  }
}

</style>