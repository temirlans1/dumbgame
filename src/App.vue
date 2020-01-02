<template>
  <div id="app">
    <StartPage v-if="currentLevel==0"/>
    <Level1 v-if="currentLevel==1"/>
    <Level2 v-if="currentLevel==2"/>
    <Level3 v-if="currentLevel==3"/>
    <Level4 v-if="currentLevel==4"/>
    <Level5 v-if="currentLevel==5"/>
    <Level6 v-if="currentLevel==6"/>
    <Level7 v-if="currentLevel==7"/>
  </div>
</template>

<script>
import StartPage from './components/StartPage'
import Level1 from './components/Level1'
import Level2 from './components/Level2'
import Level3 from './components/Level3'
import Level4 from './components/Level4'
import Level5 from './components/Level5'
import Level6 from './components/Level6'
import Level7 from './components/Level7'

export default {
  name: 'app',
  components: {
    StartPage,
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7
  },
  data() {
    return {
      level: 7
    }
  },
  methods: {
    increaseLevel() {
      this.level ++
      
    }
  },
  computed: {
    currentLevel() {
      return this.level;
      
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
