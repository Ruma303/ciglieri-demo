<template>
    <footer id="footer-container d-flex fixed-bottom flex-column">
      <div id="upper-footer"></div>
      <div id="lower-footer"></div>
    </footer>
</template>

<script>
//import
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
#upper-footer{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20rem;
    background-color: white;
    border-top: .1px solid #5b5b5b
}
#lower-footer{
    background-color: #5b5b5b;
    width: 100%;
    height: 5rem;
}
</style>
