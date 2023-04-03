<template>
    <div>
      <h1>Punto unico d'Accesso</h1>
      <p>Il PUA è il primo snodo di ingresso al sistema territoriale dei servizi socioassistenziali e sociosanitari consente, sin dal primo contatto del cittadino, una integrazione tra la componente sociale e sanitaria del sistema dei servizi locali.
      </p>
      <div class="poster-div">
        <img src="@/assets/img/locandina-pua.png" alt="locandina-pua" id="locandina-pua">
      </div>
      <p>
        Il PUA è la porta d’accesso al sistema territoriale dei servizi socioassistenziali e sociosanitari, tutta la popolazione può rivolgersi al PUA per ricevere accoglienza, ascolto e orientamento.
      </p>

      <p>
        Il Punto Unico d’Accesso è aperto il lunedì, il mercoledì e  venerdì dalle 9:00 alle 12:00, il martedì e il giovedì dalle 9:00 alle 12:00 e dalle 15:00 alle 17:00, senza appuntamento.
      </p>

      <h3>PUA ASL Roma 6 - Anzio</h3>
      <p> Via Aldobrandini n. 32 Villa Albani, Padiglione Sabatucci, stanza 5</p>
      <p>Tel. 96 93 27 64 57</p>
      <h3>PUA Comune di Anzio</h3>
      <p>Viale Claudio Paolini n.6, Villa Adele – Servizi Sociali</p>
      <p>Tel. 96 98 499419</p>
      <h3>PUA Comune di Nettuno</h3>
      <p>Viale della Vittoria n. 2, Servizi Sociali</p>
      <p>Tel. 0698889555</p>

      <!--! forse da eliminare -->
      <!--<ul class="px-0">
        <li>Dove</li>
        <li>Orari</li>
        <li>Chiama</li>
        <li>Come raggiungerci</li>
      </ul>-->
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
  width: 70%;
  margin: 2rem 0;
}
</style>