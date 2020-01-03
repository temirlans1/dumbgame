<template>
    <div id="level-header" class="centered noselect">
        <div id="word-level">level</div>
        <div id="number-level">{{level}}</div>
        <div id="lvl-border"></div>
        <div id="level-message">
            <div id="lvl10-message" style="animation-delay: 2s;">
                The answer is in video
            </div>
            <div id="lvl10-message" style="animation-delay: 2s;">
                Please, watch till the end
            </div>
            <div id="lvl10-message" style="animation-delay: 2s;">
                |Here will be video|
            </div>
            <input id="ans" type="text" placeholder="Answer...">
            <div class="submit-btn"
            @click="checkAns()"
            v-show="!correct">Submit</div>
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
            correct: false
        }
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            this.$parent.stopWatch();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        checkAns() {
            var ans = document.getElementById("ans");
            if(ans.value == "create"){
                ans.style.borderColor = "rgb(0, 95, 0)";
                this.correct = true;
                setTimeout(this.nextLvl, 1000);
            }
            else {
                ans.style.borderColor = "rgb(177, 0, 0)";
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
    input {
        font-size: 35px;
    }
    .submit-btn {
        margin-left: 30vw;
        margin-right: 30vw;
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
}
@media screen and (min-width: 1000px) {
    input {
        font-size: 50px;
    }
    .submit-btn {
        margin-left: 35vw;
        margin-right: 35vw;
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
</style>