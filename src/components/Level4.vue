<template>
    <div id="level-header" class="centered noselect">
        <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="lvl4-pass"
        @click="nextLvl"
        v-if="deletedAmount==8">way out</div>
        <div id="level-message">
            <div>
                <div id="no" class="lvl4-message">
                    no
                </div>
                <div id="words" class="lvl4-message">
                    words
                </div>
                <div id="needed" class="lvl4-message">
                    needed
                </div>
            </div>
            <div>
                <div id="to" class="lvl4-message">
                    to
                </div>
                <div id="find" class="lvl4-message">
                    find
                </div>
                <div id="a" class="lvl4-message">
                    a
                </div>
                <div id="way" class="lvl4-message">
                    way
                </div>
                <div id="out" class="lvl4-message">
                    out
                </div>
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
    name: 'Level4',
    data() {
        return {
            deletedAmount: 0,
            started: false
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
            document.getElementById("lvl4-pass").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        delNo() {
            document.getElementById("no").remove();
            this.deletedAmount ++;
        },
        delWords() {
            document.getElementById("words").remove();
            this.deletedAmount ++;
        },
        delNeeded() {
            document.getElementById("needed").remove();
            this.deletedAmount ++;
        },
        delTo() {
            document.getElementById("to").remove();
            this.deletedAmount ++;
        },
        delFind() {
            document.getElementById("find").remove();
            this.deletedAmount ++;
        },
        delA() {
            document.getElementById("a").remove();
            this.deletedAmount ++;
        },
        delWay() {
            document.getElementById("way").remove();
            this.deletedAmount ++;
        },
        delOut() {
            document.getElementById("out").remove();
            this.deletedAmount ++;
        },
        startLvl() {
            document.getElementById("no").addEventListener("click", this.delNo);
            document.getElementById("words").addEventListener("click", this.delWords);
            document.getElementById("needed").addEventListener("click", this.delNeeded);
            document.getElementById("to").addEventListener("click", this.delTo);
            document.getElementById("find").addEventListener("click", this.delFind);
            document.getElementById("a").addEventListener("click", this.delA);
            document.getElementById("way").addEventListener("click", this.delWay);
            document.getElementById("out").addEventListener("click", this.delOut);
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
  .lvl4-message {
    padding-right: 5px;
  }
}
@media screen and (min-width: 640px) {
  #level-header {
    font-size: 50px;
  }
  #level-message {
    font-size: 50px;
  }
  .lvl4-message {
    padding-right: 10px;
  }
}
@media screen and (min-width: 1000px) {
  #level-header {
    font-size: 80px;
  }
  #level-message {
    font-size: 70px;
  }
  .lvl4-message {
    padding-right: 15px;
  }
}
.lvl4-message {
    position: relative;
    margin-top: 100px;
    color:#1b1b1b;
    background-color: #1b1b1b;
    -webkit-animation: lvl2-m-fadeOut 2.0s forwards;
    animation: lvl2-m-fadeOut 2.0s forwards;
    animation-delay: 2.0s;
    display: inline-block;
}
@keyframes lvl2-m-fadeOut {
  100% {
    color: white;
  }
}
#lvl4-pass {
    cursor: pointer;
    position: relative; /* or absolute */
    margin-top: 200px;
    color: #1b1b1b;
    margin-left: auto;
    margin-right: auto;
    -webkit-animation: lvl4-p-fadeOut 2.0s forwards;
    animation: lvl4-p-fadeOut 2.0s forwards;
    animation-delay: 1.0s;
}
@keyframes lvl4-p-fadeOut {
  100% {
    color: white;
  }
}
</style>