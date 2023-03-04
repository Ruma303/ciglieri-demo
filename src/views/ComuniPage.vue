<template>
    <div id="comuni-container">
      <h1 class="text-uppercase">Comuni</h1>
      <ul class="px-0">
        <li class="d-flex justify-content-center gap-4 align-items-center">
          <h4>Anzio: </h4>
          <a href="https://www.comune.anzio.roma.it/" class="town-link">
            <span class="town-title">Comune di Anzio</span>
          </a>
        </li>
        <li class="d-flex justify-content-center gap-4 align-items-center">
          <h4>Nettuno: </h4>
          <a href="https://www.comune.nettuno.roma.it/" class="town-link">
            <span class="town-title">Comune di Nettuno</span>
          </a>
        </li>
      </ul>
    </div>
</template>
<script>
//import
export default {
    name: 'Comuni',
}
</script>
<style lang="scss" scoped>
ul {
    list-style:none;
}
#comuni-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;

  #tonw-link {
    font-size: .8rem;
  }
}
</style>
