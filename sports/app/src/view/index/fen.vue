<template>
    <div>
        <sear-head :content="f"></sear-head>
    </div>
</template>
<script>
import searHead from "@/components/public/pucesr"
export default {
    data(){
        return {
            f:"ipt"
        }
    },
    components:{
        searHead,
    }
}
</script>

