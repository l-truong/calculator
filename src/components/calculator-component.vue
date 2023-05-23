<template>
    <div class="calculator">
        <div class="display">{{ display }}</div> 

        <div class="btn" @click="addNumber(7)">7</div>
        <div class="btn" @click="addNumber(8)">8</div>
        <div class="btn" @click="addNumber(9)">9</div>
        <div class="btn operator" @click="getOperator('add')">+</div>

        <div class="btn" @click="addNumber(4)">4</div>
        <div class="btn" @click="addNumber(5)">5</div>
        <div class="btn" @click="addNumber(6)">6</div>
        <div class="btn operator" @click="getOperator('minus')">−</div>

        <div class="btn" @click="addNumber(1)">1</div>
        <div class="btn" @click="addNumber(2)">2</div>
        <div class="btn" @click="addNumber(3)">3</div>
        <div class="btn operator" @click="getOperator('multiply')">×</div>

        <div class="btn" @click="clear()">C</div>
        <div class="btn" @click="addNumber(0)">0</div>
        <div class="btn equal" @click="getResult()">=</div>
        <div class="btn operator" @click="getOperator('divide')">÷</div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                display: 0,
                result: 0,
                operator: null,
                nb1: null,
                gotOperator: false,
                gotresult: false
            }
        },
        methods: {
            addNumber(n){
                if(this.gotresult === true) {
                    this.clear();
                }
                else if(this.gotOperator === true){
                    this.display = null;
                    this.gotOperator = false;
                }
                this.display=this.display*10+n;                              
            },        
            getOperator(o) {
                this.operator = o;
                this.nb1=this.display;  
                this.gotOperator = true;
            },
            getResult() {
                switch (this.operator) {
                    case 'add':
                        this.display = this.nb1 + this.display;
                        break;
                    case 'minus':
                        this.display = this.nb1 - this.display;
                        break;
                    case 'multiply':
                        this.display = this.nb1 * this.display;
                        break;
                    case 'divide':
                        this.display = this.nb1 / this.display;
                        break;
                    default:
                        break;
                }
                this.gotresult = true;      
            },
            clear(){
                this.display=0;
                this.result=0;
                this.operator=null;    
                this.nb1=null;
                this.gotOperator=false;
                this.gotresult= false;
            }
        }
    }
</script>

<style scoped>
    .calculator {
        width: 18rem;
        margin: 0 auto;
        font-size: 1.8rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(4.5rem, auto);
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 200;
        color: #fff;
    }
    .calculator > div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0.5rem;
    }
    .display {
        grid-column: 1 / 5;
        font-size: 5rem;
        justify-content: center;
        justify-content: end!important;
        font-family:'Courier New', Courier, monospace;
    }
    .zero {
        grid-column: 1 / 3;
    }
    .btn {
        background-color: #424242;
        cursor: pointer;
    }
    .btn:hover {
        background-color: #3d3c3c;
    }
    .btn:active {
        background-color: #dcdcdc;
    }
    .equal {
        background-color: #A0A0A0;
        color: #000;
    }
    .equal:hover {
        background-color: #A0A0A0;
    }
    .equal:active {
        background-color: #8f8e8e;
    }
    .operator {
        background-color: #F69906;
    }
    .operator:hover {
        background-color: #da8c0f;
    }
    .operator:active {
        background-color: #da8c0f;
    }
</style>