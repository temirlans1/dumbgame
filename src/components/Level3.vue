<template>
    <div id="level-header" class="centered noselect">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl2-message" style="animation-delay: 2s;">
                Sometimes you just
            </div>
            <div id="lvl2-message" style="animation-delay: 3s;">
                need to dig deeper
            </div>
        </div>
        <div id="big-element"></div>
        <div id="lvl3-pass"
        @click="nextLvl">Hello</div>
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
    name: 'Level3',
    data() {
        return {
        }
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            document.getElementById("big-element").remove();
            document.getElementById("lvl3-pass").remove();
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
    -webkit-animation: lvl2-m-fadeOut 2.0s forwards;
    animation: lvl2-m-fadeOut 2.0s forwards;
}
@keyframes lvl2-m-fadeOut {
  100% {
    color: white;
    margin-top: 50px; 
  }
}
#big-element {
    width: 100%;
    height: 2000px;
}
#lvl3-pass {
    cursor: pointer;
    position: absolute; /* or absolute */
    top: 90%;
    right: 45%;
    color: white;
    margin-left: auto;
    margin-right: auto;
}
</style>