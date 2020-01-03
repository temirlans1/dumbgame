<template>
    <div id="level-header" class="centered noselect">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl2-message" style="animation-delay: 2s;">
                Lets check how lucky you are
            </div>
            <div id="ld1" class="lucky-digit" 
            style="animation-delay: 2s;">0</div>
            <div id="roll" class="roll-btn" 
            style="animation-delay: 2s"
            @click="startRandom">Roll</div>
            
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
    name: 'Level9',
    data() {
        return {
            rollPressed: false
        }
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        startRandom() {
            if(document.getElementById("roll").innerHTML == "Nice"){
                this.nextLvl();
            }
            else {
                var n = Math.floor(Math.random() * 100) + 1;
                if(n % 5 == 0){
                    n = 69;
                }
                if(!this.rollPressed) {
                    document.getElementById("ld1").classList.remove("ld-green");
                    document.getElementById("ld1").classList.remove("ld-red");
                    this.rollPressed = true;
                    this.reachNumber(0, n);
                }
            }
            
        },
        reachNumber(i, n) {
            var ld = document.getElementById("ld1");
            ld.innerHTML = i;
            if(i < n) {
                setTimeout(this.reachNumber, 50, i+1, n);
            }
            else {
                if(i == 69) {
                    ld.classList.add("ld-green");
                    document.getElementById("roll").innerHTML = "Nice";
                }
                else {
                    ld.classList.add("ld-red");
                }
                this.rollPressed = false;
            }
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
    .lucky-digit {
        padding: 30px;
        margin-left: 35vw;
        margin-right: 35vw;
    }
    .roll-btn {
        margin-left: 35vw;
        margin-right: 35vw;
    }
}
@media screen and (min-width: 640px) {
    .lucky-digit {
        padding: 50px;
        margin-left: 40vw;
        margin-right: 40vw;
    }
    .roll-btn {
        margin-left: 40vw;
        margin-right: 40vw;
    }
}
@media screen and (min-width: 1000px) {
    .lucky-digit {
        padding: 70px;
        margin-left: 40vw;
        margin-right: 40vw;
    }
    .roll-btn {
        margin-left: 40vw;
        margin-right: 40vw;
    }
} 
.lucky-digit {
  color:#1b1b1b;
  background-color:#1b1b1b;
  border-radius: 10px;
  margin-top: 100px;
  -webkit-animation: ld-fadeOut 3.0s forwards;
  animation: ld-fadeOut 3.0s forwards;
}
@keyframes ld-fadeOut {
  100% {
      background-color:#ffa500;
  }
}
.ld-red {
    color: rgb(177, 0, 0);
}
.ld-green {
    color: rgb(0, 95, 0);
}
.roll-btn {
  color:#1b1b1b;
  background-color:#1b1b1b;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 100px;
  -webkit-animation: ld-fadeOut 3.0s forwards;
  animation: ld-fadeOut 3.0s forwards;
}
@keyframes ld-fadeOut {
  100% {
      background-color:#ffa500;
  }
}
</style>