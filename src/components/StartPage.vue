<template>
    <div id="start-anim" class="centered noselect">
        <div id="leaderboard" @click="this.$parent.showLeaders">
        <i class="fas fa-trophy"></i></div>
        <div id="word-welcome">Welcome to my</div>
        <div id="letter-u">u</div>
        <div id="letter-m">m</div>
        <div id="letter-d"
        @mouseover="moveD">d</div>
        <div id="letter-b"
        @mouseover="moveB">b</div>
        <div id="word-game">game</div>
        <div id="word-start"
        @click="startGame">start</div>
    </div>
</template>

<script>
export default {
    name: 'StartPage',
    data() {
        return {
            hovered_d: false,
            hovered_b: false,
            blocked: false,
            records: []
        }
    },
    computed: {

    },
    methods: {
        moveD(){
            if(!this.blocked){
                var d = document.getElementById("letter-d");
                if(this.hovered_d == false){
                    d.classList.add("letter-d-move");
                    this.hovered_d = true;
                } else {
                    d.classList.remove("letter-d-move");
                    this.hovered_d = false;
                }
                if(this.hovered_d && this.hovered_b){
                    document.getElementById("word-game").classList.add("w-g-appear");
                    document.getElementById("word-welcome").classList.add("w-w-appear");
                    document.getElementById("word-start").classList.add("w-s-move");
                    document.getElementById("leaderboard").classList.add("leaderboard-appear");
                }
                else {
                    document.getElementById("word-game").classList.remove("w-g-appear");
                    document.getElementById("word-welcome").classList.remove("w-w-appear");
                    document.getElementById("word-start").classList.remove("w-s-move");
                    document.getElementById("leaderboard").classList.remove("leaderboard-appear");
                }
            }
        },
        moveB(){
            if(!this.blocked){
                var b = document.getElementById("letter-b");
                if(this.hovered_b == false){
                    b.classList.add("letter-b-move");
                    this.hovered_b = true;
                } else {
                    b.classList.remove("letter-b-move");
                    this.hovered_b = false;
                }
                if(this.hovered_d && this.hovered_b){
                    document.getElementById("word-game").classList.add("w-g-appear");
                    document.getElementById("word-welcome").classList.add("w-w-appear");      
                    document.getElementById("word-start").classList.add("w-s-move");
                    document.getElementById("leaderboard").classList.add("leaderboard-appear");
                }
                else {
                    document.getElementById("word-game").classList.remove("w-g-appear");
                    document.getElementById("word-welcome").classList.remove("w-w-appear");
                    document.getElementById("word-start").classList.remove("w-s-move");
                    document.getElementById("leaderboard").classList.remove("leaderboard-appear");
                }
            }
        },
        startGame(){
            var d = document.getElementById("letter-d");
            var b = document.getElementById("letter-b");
            d.classList.remove("letter-d-move");
            b.classList.remove("letter-b-move");
            document.getElementById("word-game").classList.remove("w-g-appear");
            document.getElementById("word-welcome").classList.remove("w-w-appear");
            document.getElementById("word-start").classList.remove("w-s-move");
            this.blocked = true;
            setTimeout(this.$parent.increaseLevel, 2000);
        }
    }
}

</script>
<style>
html,
body {
    background-color: #1b1b1b
}
#start-anim {
    color: #1b1b1b;
    font-weight: 1000;
    font-size: 100px;
    font-family: 'Arial', Helvetica, Arial, sans-serif;
}
#letter-d {
    cursor: pointer;
    position: fixed; /* or absolute */
    top: 40%;
    right: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffa500;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 30px;
    display: inline-block;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 1s ease-in-out; /** Firefox **/
    -o-transition: all 1s ease-in-out; /** Opera **/
}
.letter-d-move {
    transform: translate(-60px,0);
    -webkit-transform: translate(-60px,0); /** Safari & Chrome **/
    -o-transform: translate(-60px,0); /** Opera **/
    -moz-transform: translate(-60px,0); /** Firefox **/
}
#letter-b {
    cursor: pointer;
    position: fixed; /* or absolute */
    top: 40%;
    left: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffa500;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-right: 40px;
    display: inline-block;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 1s ease-in-out; /** Firefox **/
    -o-transition: all 1s ease-in-out; /** Opera **/
}
.letter-b-move {
    transform: translate(+87px,0);
    -webkit-transform: translate(+87px,0); /** Safari & Chrome **/
    -o-transform: translate(+87px,0); /** Opera **/
    -moz-transform: translate(+87px,0); /** Firefox **/
}
#letter-u {
    cursor: pointer;
    position: fixed; /* or absolute */
    top: 40%;
    right: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    background-color: #ffa500;
    display: inline-block;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 1s ease-in-out; /** Firefox **/
    -o-transition: all 1s ease-in-out; /** Opera **/
}
#letter-m {
    cursor: pointer;
    position: absolute; /* or absolute */
    top: 40%;
    left: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 2px;
    background-color: #ffa500;
    display: inline-block;
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all 1s ease-in-out; /** Firefox **/
    -o-transition: all 1s ease-in-out; /** Opera **/
}
#word-game {
    cursor: pointer;
    text-align: center;
    position: fixed; /* or absolute */
    top: 40%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 110px;
    font-size: 50px;
    transition:color 1s ease;
}
.w-g-appear {
    color:white;
    transition:all 1s ease;
    -webkit-transition-delay:all 1s ease;
    -moz-transition-delay:all 1s ease;
    -ms-transition-delay:all 1s ease;
    -o-transition-delay:all 1s ease;
}
#word-welcome {
    cursor: pointer;
    text-align: center;
    position: fixed; /* or absolute */
    top: 40%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -150px;
    transition:color 1s ease;
}
.w-w-appear {
    color:white;
    transition:all 1s ease;
    -webkit-transition-delay:all 1s ease;
    -moz-transition-delay:all 1s ease;
    -ms-transition-delay:all 1s ease;
    -o-transition-delay:all 1s ease;
}
@media screen and (min-width: 320px) {
  #word-welcome {
    font-size: 60px;
  }
}
@media screen and (min-width: 1000px) {
  #word-welcome {
    font-size: 100px;
  }
} 
#word-start {
    cursor: pointer;
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 80px;
    margin-top: 150px;
    margin-left: -1500px;
    transition: transform 2s ease-in-out;
    -webkit-transition: transform 2s ease-in-out; /** Chrome & Safari **/
    -moz-transition: transform 2s ease-in-out; /** Firefox **/
    -o-transition: transform 2s ease-in-out; /** Opera **/
}
.w-s-move {
    transform: translate(+1410px,0);
    -webkit-transform: translate(+1410px,0); /** Safari & Chrome **/
    -o-transform: translate(+1410px,0); /** Opera **/
    -moz-transform: translate(+1410px,0); /** Firefox **/
}
#word-start:hover {
    background-color: #ffa500;
}

.fa-trophy {
  position: absolute;
  left: 95%;
  transition:color 1s ease;
}

.leaderboard-appear {
  color:#ffa500;
  transition:all 1s ease;
  -webkit-transition-delay:all 1s ease;
  -moz-transition-delay:all 1s ease;
  -ms-transition-delay:all 1s ease;
  -o-transition-delay:all 1s ease;
  cursor: pointer;
}
</style>