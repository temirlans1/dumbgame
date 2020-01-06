<template>
    <div id="level-header" class="centered noselect">
        <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
        <div id="endgame-message">
            Woah!
        </div>
        <div id="endgame-message">
            You finished my game in 
        </div>
        <div class="final-time">
            {{time}}
        </div>
        <div id="e-name-message">
            I guess, you are
        </div>
        <input id="name" type="text" :placeholder="PlayerName">
        <div class="submit-name-btn"
            @click="submitRecord">Yes, that's me</div>
        <div class="submit-name-btn"
            @click="tryAgain">I want to play again</div>
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
import axios from 'axios'

export default {
    name: 'Endgame',
    data() {
        return {
            nameShow: 0,
            finishTime: this.$parent.finishTime(),
            PlayerName: this.randomName
        }
    },
    methods: {
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            setTimeout(this.$parent.increaseLevel, 2000);
        },
        canShow() {
            this.nameShow ++;
            if(this.nameShow == 1){
                setTimeout(this.canShow, 2000);
            }
        },
        tryAgain() {
            this.$parent.startGame();
        },
        submitRecord() {
            var n = document.getElementById("name");
            n = n.value;
            axios
            .post('https://dumbgame-api.herokuapp.com/api/v1/resources/records/', {   
                headers: {'Access-Control-Allow-Origin': '*'},
                params: {
                    name: n,
                    score: this.finishTime
                }
            })
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            });
        }
    },
    computed: {
        time() {
            this.canShow();
            return this.finishTime
        },
        randomName() {
            var names = [
                'Genevieve','Svetlana','Genevie','Ashlyn',
                'Tessa','Ty','Clyde','Chantay','Casandra',
                'Cara','Joie','Collene','Tracey','Willard',
                'Rima','Leandro','Dorian','Bryanna','Ronny',
                'Charlesetta','Barb','Avery','Amber','Shantay',
                'Rosena','Carlena','Joi','Linette','Anya','Brock',
            ]
            var r = Math.floor(Math.random()*30)
            return names[r]
        }
    }
}

</script>
<style>

@media screen and (min-width: 320px) {
    .submit-name-btn {
        margin-left: 22vw;
        margin-right: 22vw;
    }
}
@media screen and (min-width: 640px) {
    .submit-name-btn {
        margin-left: 25vw;
        margin-right: 25vw;
    }
}
@media screen and (min-width: 1000px) {
    .submit-name-btn {
        margin-left: 35vw;
        margin-right: 35vw;
        font-size: 50px;
    }
}
#endgame-message {
    color: #1b1b1b;
    -webkit-animation: end-m-fadeOut 1.0s forwards;
    animation: end-m-fadeOut 1.0s forwards;
    animation-delay: 0.5s;
    animation-timing-function: linear;
}
@keyframes end-m-fadeOut {
  100% {
    color: white;
    font-size: smaller;
  }
}
#e-name-message {
    color: #1b1b1b;
    -webkit-animation: end-name-fadeOut 1.0s forwards;
    animation: end-name-fadeOut 1.0s forwards;
    animation-delay: 0.5s;
    animation-timing-function: linear;
}
@keyframes end-name-fadeOut {
  100% {
    color: white;
    font-size: smaller;
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
  text-align: center;
}
.final-time {
    position: relative;
    color: #ffa500;
    padding: 5px 7px 5px 7px;
}

.submit-name-btn {
  color:#1b1b1b;
  background-color:#1b1b1b;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  -webkit-animation: sbn-fadeOut 3.0s forwards;
  animation: sbn-fadeOut 3.0s forwards;
}
@keyframes sbn-fadeOut {
  100% {
      background-color:#ffa500;
  }
}

</style>