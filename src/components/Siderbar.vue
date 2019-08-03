<template>
    <section class="col-md-3 card-wrapper siderbar position-fixed">
        <div class="card">
            <div class="card-top">
                <div class="img">
                    <img :src="info.picture" alt="">
                </div>
                <div class="name-position">
                    <h3>{{info.name}}</h3>
                    <h4>{{info.position}}</h4>
                    <p>{{info.label}}</p>
                </div>
            </div>
            <hr>
            <div class="card-body">
                <div class="details">
                    <span class="icon"><i class="fas fa-address-card"></i></span>
                    <span class="info">{{info.gender}} {{info.age}}岁 {{info.worklife}}年工作经验</span>
                </div>
                <div class="details">
                    <span class="icon"><i class="fas fa-map-marked-alt"></i></span>
                    <span class="info">{{info.localtion}}</span>
                </div>
                <div class="details">
                    <span class="icon"><i class="fas fa-phone-alt"></i></span>
                    <span class="info">{{info.phone}}</span>
                </div>
                <div class="details">
                    <span class="icon"><i class="fas fa-envelope"></i></span>
                    <span class="info">{{info.email}}</span>
                </div>
                <div class="details">
                    <span class="icon"><i class="fas fa-graduation-cap"></i></span>
                    <span class="info">{{info.education}}</span>
                </div>
                <div class="details">
                    <span class="icon"><i class="fas fa-language"></i></span>
                    <span class="info">{{info.language}}</span>
                </div>
            </div>
            <hr>
            <div class="card-bottom text-center">
                <div>
                    <a :href ="info.website"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Siderbar',
  props: {
      info:{
          type: Object,
          required: true
      }
  }
}
</script>
<style scoped>
.card-wrapper{
    padding: 5px;
}
.card{
  background-color: #fff;
  padding: 10px;
  border-color: #ccc;
}
hr{
    margin: 20px 0;
    height: 1px;
    color: #eee;
}
.card-top .img{
    padding: 20px 0;
}
.card-top .img img{
    width: 100px;
    height: 100px;
    border-radius:50%;
}
.name-position h3{
    font-size: 24px;
    margin: 20px 0 10px;
    font-weight: bold;
}
.name-position h4{
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
}
.name-position p{
    font-size: 14px;
    font-family: inherit;
    color: #777;
    margin: 10px 0;
    line-height: 1.1;
}
.card-body{
   display: table;
}
.details{
    padding: 5px 0;
}
.details .icon{
    display: table-cell;
    margin: 0;
    padding: 0 10px;
    color: #707070;
}
.details .info{
    display: table-cell;
    font-size: 14px;
    text-align:left;
}
.fas{
    padding: 0 10px;
}
.card-bottom div a{
    color:#707070;
    font-size: 1.6rem;
}
.card-bottom {
    margin: 0 auto 10px;
}
.card-bottom div a :hover{
    color:#2980b9;
    font-size: 2.1rem;
}
@media (max-width: 992px) and (min-width: 768px){
    .card-body{
        float:left;
        width:25%;
    }
}
@media (max-width: 768px) {
    .card-wrapper{
        position: relative !important;
    }
}
</style>
