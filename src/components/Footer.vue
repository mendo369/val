<script setup></script>

<template>
    <footer>
        <div class="social">
            <ul>
                <li class="social-red"><img src="../assets/icons/instagram-logo-36.png" alt=""></li>
                <li class="social-red"><img src="../assets/icons/facebook-square-logo-36.png" alt=""></li>
                <li class="social-red"><img src="../assets/icons/linkedin-square-logo-36.png" alt=""></li>
                <li class="social-red"><img src="../assets/icons/twitter-logo-36.png" alt=""></li>
            </ul>
        </div>
        <div class="copyrights">
            <p>Copyright ©2024 All rights reserved</p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 150px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.social ul{
    display: flex;
    list-style: none;
    gap: 20px;
}

.social-red{
    width: 30px;
    height: 30px;
    cursor: pointer;
}


</style>
