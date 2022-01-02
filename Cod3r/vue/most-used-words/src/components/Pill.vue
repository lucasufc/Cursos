<template>
    <div class="pill">
        <span class="name">{{ name }}</span>
        <span class="amount">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    props: ['name', 'amount']
}
</script>

<style scoped>
    .pill {
        margin: 10px;
        height: 55px;
        border-radius: 30px;

        background-color: #dc143c;
        color: #ffffff;
        font-size: 1.3rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }

    .pill .name {
        margin-left: 15px;

    }
    .pill .amount {
        margin: 10px;
        padding: 15px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        
        background-color: #fff;
        color: #000;
        font-size: 14px;

        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }
</style>