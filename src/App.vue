<template>
  <div id="app" ref="main">
    <Stopwatch ref="watch" v-show="currentLevel!=0 && currentLevel!=11"/>
    <EndGame v-if="currentLevel==11"/>
    <StartPage v-if="currentLevel==0"/>
    <Level1 v-if="currentLevel==1"/>
    <Level2 v-if="currentLevel==2"/>
    <Level3 v-if="currentLevel==3"/>
    <Level4 v-if="currentLevel==4"/>
    <Level5 v-if="currentLevel==5"/>
    <Level6 v-if="currentLevel==6"/>
    <Level7 v-if="currentLevel==7"/>
    <Level8 v-if="currentLevel==8"/>
    <Level9 v-if="currentLevel==9"/>
    <Level10 v-if="currentLevel==10"/>
  </div>
</template>

<script>
import Stopwatch from './components/Stopwatch'
import StartPage from './components/StartPage'
import EndGame from './components/EndGame'
import Level1 from './components/Level1'
import Level2 from './components/Level2'
import Level3 from './components/Level3'
import Level4 from './components/Level4'
import Level5 from './components/Level5'
import Level6 from './components/Level6'
import Level7 from './components/Level7'
import Level8 from './components/Level8'
import Level9 from './components/Level9'
import Level10 from './components/Level10'

if(!localStorage.level){
  localStorage.setItem("level", 0)
}
export default {
  name: 'app',
  components: {
    Stopwatch,
    StartPage,
    EndGame,
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
    Level9,
    Level10
  },
  data() {
    return {
      level: localStorage.getItem("level"),
    }
  },
  mounted() {
    if(this.level > 0 ){
      this.$refs.watch.setData();
    }
  },
  methods: {
    gotoMain() {
      localStorage.setItem("level", 0);
      localStorage.setItem("milsec", 0);
      localStorage.setItem("seconds", 0);
      localStorage.setItem("minutes", 0);
      localStorage.setItem("hours", 0);
      this.$refs.watch.setData();
      this.level = localStorage.getItem("level")
    },
    startGame() {
      localStorage.setItem("level", 1);
      localStorage.setItem("milsec", 0);
      localStorage.setItem("seconds", 0);
      localStorage.setItem("minutes", 0);
      localStorage.setItem("hours", 0);
      this.$refs.watch.setData();
      this.level = localStorage.getItem("level")
    },
    increaseLevel() {
      this.level ++
      localStorage.setItem("level", this.level)
      this.$refs.watch.saveData();
    },
    goto1() {
      this.level = 1
    },
    goto2() {
      this.level = 2
    },
    goto3() {
      this.level = 3
    },
    goto4() {
      this.level = 4
    },
    goto5() {
      this.level = 5
    },
    goto6() {
      this.level = 6
    },
    goto7() {
      this.level = 7
    },
    goto8() {
      this.level = 8
    },
    goto9() {
      this.level = 9
    },
    goto10() {
      this.level = 10
    },
    startWatch() {
      this.$refs.watch.start();
    },
    stopWatch() {
      this.$refs.watch.stop();
    },
    finishTime() {
      return this.$refs.watch.getTime();
    }
  },
  computed: {
    currentLevel() {
      return this.level
    }
  }
}
</script>

<style>
@import './assets/css/theme.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  height: 100%;
}

</style>
