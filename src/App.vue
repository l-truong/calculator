<template>
  <!-- Header -->
  <div class="header">
    <div class="time">{{ getTime()}}</div>    
    <div class="icons">
      <font-awesome-icon :icon="['fas', 'signal']" />
      <font-awesome-icon :icon="['fas', 'wifi']" />
      <font-awesome-icon :icon="['fas', 'battery-three-quarters']" />
    </div>    
  </div>
  <!-- Main Calculator Component -->
  <CalculatorComponent/>
  <!-- Swipe -->
  <hr>
</template>

<script>
  import CalculatorComponent from './components/calculator-component.vue';
 
  export default {
    name: "app",
    components: {
      CalculatorComponent
    },
    methods: {
      getTime(){
        const d = new Date();
        var time = d.getHours()+":";
        if (d.getMinutes()<10){
          time += "0";
        }
        return  time + d.getMinutes();
      }
    }
  }
</script>

<style>
  body {
    background: #7F00FF;
    background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);
    background: linear-gradient(to right, #E100FF, #7F00FF);
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }  
  .header {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;       
    padding: 0 2rem 5rem 2rem;
    color: #fff;
  }
  .svg-inline--fa{
    padding-left: 0.5rem;
  }
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18rem;
    height: 38rem;
    padding: 2rem 1rem 1rem 1rem;
    border-radius: 4rem;
    -webkit-box-shadow:inset 0 0 0 0.2rem #56697D;
    -moz-box-shadow:inset 0 0 0 0.2rem #56697D;
    box-shadow:inset 0 0 0 0.2rem #56697D;
    border: 0.2rem solid #fff;
    background: #000;
  }
  hr {
    width: 35%;
    height: 0.2rem;
    background: #fff;
    border-radius: 5rem;
  }
</style>
