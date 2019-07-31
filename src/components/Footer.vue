<template>
    <section class="col-md-12 card-wrapper">
        <div class="footer">Github地址：<a href="https://github.com/Noober-K/resume" target="_blank">https://github.com/Noober-K/resume</a>
        </div>
    </section>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Footer',
  props: {
      info:{
          type: Object,
          required: true
      }
  }
}
</script>
<style>
.card-wrapper{
    padding: 5px;
    width: 100%;
}
.footer{
    height: 42px;
    line-height: 42px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.footer a{
    color: #337ab7;
    text-decoration : none;
    font-weight: 700;
}
.footer a:hover{
    color: #2b8fff;
    font-weight: 700;
}
</style>
