<template>
    <div id="level-header" class="centered noselect">
        <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl10-message" style="animation-delay: 2s;">
                The answer is in video
            </div>
            <div id="lvl10-message" style="animation-delay: 2s;">
                <div id="start-btn" class="vid-btn">
                    <div class="vid-play-btn"></div>
                </div>
                <iframe id="vid1" src="https://www.youtube.com/embed/Stk8EZ2abDA"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    v-show="videoPressed"></iframe>
            </div>
            <input id="ans" type="text" placeholder="It's a me">
            <div id="s-btn"></div>
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
    name: 'Level10',
    data() {
        return {
            videoPressed: false
        }
    },
    mounted() {
        setTimeout(this.startLvl, 2000);
    },
    methods: {
        gotoMain() {
            this.$parent.gotoMain();
        },
        startLvl() {
            this.$parent.startWatch();
            document.getElementById('start-btn').addEventListener("click", this.vidStart);
            document.getElementById("s-btn").classList.add("submit-btn");
            document.getElementById("s-btn").innerHTML = "Submit";
        },
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        checkAns() {
            var ans = document.getElementById("ans");
            var strAns = ans.textContent;
            strAns.toLowerCase();
            strAns.trim();
            if(strAns.localeCompare("mario")){
                ans.style.borderColor = "rgb(0, 95, 0)";
                this.nextLvl();
            }
            else {
                ans.style.borderColor = "rgb(177, 0, 0)";
            }
        },
        vidStart() {
            document.getElementById("start-btn").remove();
            this.videoPressed = true;
            document.getElementById("vid1").src = "https://www.youtube.com/embed/Stk8EZ2abDA?autoplay=1"
            document.getElementById("s-btn").addEventListener("click", this.checkAns)
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
    input {
        font-size: 35px;
    }
    .submit-btn {
        margin-left: 30vw;
        margin-right: 30vw;
    }
    iframe {
        width: 80vw;
        height: 30vh;
    }
    .vid-btn {
        width: 80vw;
        height: 30vh;
    }
    .vid-play-btn {
            margin-top: 12vh;
            width: 40px;
            height: 40px;
            border-width: 20px 0px 20px 40px;
    }
}
@media screen and (min-width: 640px) {
    input {
        font-size: 50px;
    }
    .submit-btn {
        margin-left: 35vw;
        margin-right: 35vw;
    }
    iframe {
        width: 70vw;
        height: 40vh;
    }
    .vid-btn {
        width: 70vw;
        height: 40vh;
    }
    .vid-play-btn {
        margin-top: 15vh;
        width: 70px;
        height: 70px;
        border-width: 35px 0px 35px 70px;
    }
}
@media screen and (min-width: 1000px) {
    input {
        font-size: 50px;
    }
    .submit-btn {
        margin-left: 35vw;
        margin-right: 35vw;
    }
    iframe {
        width: 40vw;
        height: 40vh;
    }
    .vid-btn {
        width: 40vw;
        height: 40vh;
    }
    .vid-play-btn {
        margin-top: 15vh;
        width: 70px;
        height: 70px;
        border-width: 35px 0px 35px 70px;
    }
} 
#lvl10-message {
    margin-top: 20px;
    color:#1b1b1b;
    -webkit-animation: lvl10-m-fadeOut 3.0s forwards;
    animation: lvl10-m-fadeOut 3.0s forwards;
}
@keyframes lvl10-m-fadeOut {
  100% {
    color: white;
  }
}
input {
  width: 50vw;
  color: white;
  margin-top: 25px;
  padding: 15px;
  border: 2px solid #ffa500;
  border-radius: 10px;
  background-color: #1b1b1b;
  outline: none;
}
.submit-btn {
  color:#1b1b1b;
  background-color:#1b1b1b;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  -webkit-animation: sb-fadeOut 3.0s forwards;
  animation: sb-fadeOut 3.0s forwards;
}
@keyframes sb-fadeOut {
  100% {
      background-color:#ffa500;
  }
}
.vid-btn {
    display: inline-block;
    text-align: center;
    border: 1px solid #ffa500;
    border-radius: 10px;
}

.vid-play-btn {
    display: inline-block;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
    border-style: solid;
    box-sizing: border-box;
    border-color: transparent transparent transparent #ffa500;
}
</style>