<template>
    <div class="door-area">
        <div class="lamp" :class="{ selected }"></div>
        <div class="door-frame" :class="{ selected: selected && !open}">
            <Gift v-if="open && hasGift"/>
        </div>
        <div class="door" :class="{ open }" @click="selected = !selected">
            <div class="number"> {{ number }} </div>
            <div class="knob" @click.stop="openUp()"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift'

export default {
    name: 'Door',
    components: { Gift },
    props: {
        number: {},
        hasGift: { type: Boolean }
    },
    methods: {
        openUp (){
           this.open = true
        }
    },
    data: function() {
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid yellow;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #aaa;
    margin-bottom: 60px;
    font-size: 3rem;

    display: flex;
    justify-content: center;
}

.door-frame {
    position: absolute;
    height: 300px;
    width: 180px;
    
    border: var(--door-border);
    border-bottom: none;

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.door .knob {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: rgb(219, 218, 218);
    align-self: flex-start;
    margin-top: 60px;
}



.door.open {
    background-color: #0007;
}

.door.open .knob {
    display: none;
}
.door.open .number {
    display: none;
}

.lamp {
    height: 30px;
    width: 60px;
    border-radius: 15px;
    background-color: #333;
    border: 3px solid black;
    position: absolute;
    top: -40px;
    z-index: 10;
}
.lamp.selected {
    background-color: #00ff55;
    box-shadow: 5px 3px 70px 70px #00ff5523, inset 0px 0px 16px 5px rgba(0, 0, 0, 0.233);
}
</style>