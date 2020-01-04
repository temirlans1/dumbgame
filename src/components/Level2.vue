<template  onload="showButton()">
    <div id="level-header" class="centered">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="ans-btn" class="brk-btn"></div>
        <div id="lvl-border"></div>
        <div id="level-message" @click="selectText">
            <div id="lvl2-message" style="animation-delay: 2s;">
                The answer will appear
            </div>
            <div id="lvl2-message" style="animation-delay: 2.5s;">
                If you look through 
            </div>
            <div id="lvl2-message" style="animation-delay: 3s;">
                the blue glasses
            </div>
            <div id="lvl2-message"
            v-show="canShow == true">
                (Hint: Select all)
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
    name: 'Level2',
    data() {
        return {
            canShow: false,
            it: 0
        }
    },
    mounted() {
        setTimeout(this.fcanShow, 15000);
        setTimeout(this.showPress, 4000);
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        selectText() {
            document.getElementById("level-message").style.userSelect = "all";
        },
        fcanShow() {
            this.canShow = true;
        },
        showPress() {
            document.getElementById("ans-btn").addEventListener("click", this.nextLvl);
            document.getElementById("ans-btn").innerHTML = "I'm here";
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
html,
body {
    background-color: #1b1b1b
}
@media screen and (min-width: 320px) {
  #level-header {
    font-size: 30px;
  }
  #level-message {
      font-size: 30px;
  }
  .brk-btn {
      font-size: 15px;
  }
}
@media screen and (min-width: 640px) {
  #level-header {
    font-size: 50px;
  }
  #level-message {
      font-size: 50px;
  }
  .brk-btn {
      font-size: 30px;
  }
}
@media screen and (min-width: 1000px) {
  #level-header {
    font-size: 80px;
  }
  #level-message {
    font-size: 70px;
  }
  .brk-btn {
      font-size: 50px;
  }
}
#lvl2-message {
    margin-top: 100px;
    color:#1b1b1b;
    -webkit-animation: lvl2-m-fadeOut 3.0s forwards;
    animation: lvl2-m-fadeOut 3.0s forwards;
}
@keyframes lvl2-m-fadeOut {
  100% {
    color: white;
    margin-top: 50px; 
  }
}
#lvl2-message-blue {
    margin-top: 100px;
    color:#1b1b1b;
    -webkit-animation: lvl2-m-b-fadeOut 3.0s forwards;
    animation: lvl2-m-b-fadeOut 3.0s forwards;
}
@keyframes lvl2-m-b-fadeOut {
  100% {
    color: white;
    margin-top: 50px; 
  }
}
.brk-btn {
    cursor: pointer;
    position: absolute; /* or absolute */
    right: 10vw;
    color: #1b1b1b;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
}
</style>