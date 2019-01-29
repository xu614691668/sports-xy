<template>
    <div class="dl">
        <router-link to="/sy">
            <dl>
                <dd><img src="@/assets/img/home.png" alt=""></dd>
                <dt>首页</dt>
            </dl>
        </router-link>
        <router-link to="/fen">
            <dl>
                <dd><img src="@/assets/img/fen.png" alt=""></dd>
                <dt>分类</dt>
            </dl>
        </router-link>
        <router-link to="/car">
            <dl>
                <dd><img src="@/assets/img/car.png" alt=""></dd>
                <dt>购物车</dt>
            </dl>
        </router-link>
        <router-link to="/wd">
            <dl>
                <dd><img src="@/assets/img/geren.png" alt=""></dd>
                <dt>个人中心</dt>
            </dl>
        </router-link>
    </div>
</template>
<style>
    .dl{
        width: 100%;
    }
    .dl dl{
        width: 100%;
        display: flex;
        color: white;
        line-height: 2;
    }
    .dl dt{
        margin-left: 0.3rem;
    }
    .dl img{
        width: 0.5rem;
        height: 0.5rem;
    }
</style>

