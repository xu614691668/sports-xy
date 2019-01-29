<template>
    <div>
        <router-view></router-view>
        <v-foote></v-foote>
    </div>
</template>
<script>
import vFoote from "@/components/index/foote.vue";
export default {
    name:"home",
    components:{
        vFoote
    }
}
</script>

