<template>
    <div class="background">
        <div class="bk-overlay">
            <h2>Welcome to pizza planet</h2>
            <img src="../assets/images/roller.png"/>
            <button class="order_btn">Lets order</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "home"
};
</script>

<style>

h2, h3 {
    margin: 2%;
}

.background {
    background-image: url('../assets/images/dough.jpg');
    background-size: cover;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
}

.bk-overlay {
    display: flex;
    flex-direction: column;
    background: #f1e6da;
    opacity: 0.8;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
}

.bk-overlay > img {
    max-width: 15%;
}

.order_btn {
    background: #f79f38;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
}

</style>