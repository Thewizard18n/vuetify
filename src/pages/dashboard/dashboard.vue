<template>
    <div>
    <Header/>
    <DashContent :value='value'/>
    </div>
</template>

<script>
import DashContent from './dashcontent'
import Header from '@/components/header'
export default {
    data(){
        return{
            value:[423, 446, 675,  510,590, 610,760],
        }
    },
    components:{
        Header,
        DashContent
    },
    mounted(){
     
    }
  
}
</script>