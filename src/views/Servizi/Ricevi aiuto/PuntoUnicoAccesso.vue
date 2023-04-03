<template>
    <div>
      <h1>Punto unico d'Accesso</h1>
      <p>Il PUA è il primo snodo di ingresso al sistema territoriale dei servizi socioassistenziali e sociosanitari consente, sin dal primo contatto del cittadino, una integrazione tra la componente sociale e sanitaria del sistema dei servizi locali.
      </p>
      <div class="poster-div">
        <img src="@/assets/img/locandina-pua.png" alt="locandina-pua" id="locandina-pua">
      </div>
      <ul class="px-0">
        <li>Dove</li>
        <li>Orari</li>
        <li>Chiama</li>
        <li>Come raggiungerci</li>
      </ul>
    </div>
</template>
<script>
//import
export default {
    name: 'PuntoUnicoAccesso',
}
</script>
<style lang="scss" scoped>
#locandina-pua {
  min-width: 25rem;
  width: 60%;
}
</style>