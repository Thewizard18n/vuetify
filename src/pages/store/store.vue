<template>
<div>
<Header/> 
<CardShoes/>
<Footer/>
</div>
</template>
<script>
import Header from '@/components/header'
import CardShoes from './cardshoes'
import Footer from '../../components/footer'
export default{
    data(){
    return{
        
    }

 },
 components:{
     CardShoes,
     Header,
     Footer
 }
}
</script>

 
 
 