<template>
    <footer id="footer-container d-flex">
        <!-- $ Parte superiore del Footer-->
      <div class="upper-footer d-flex justify-space-between">
          <!--* Parte sinistra -->
        <div class="upper-footer-left w-25 d-flex flex-column">
            <h5>Distretto Sociosanitario Roma 6.6</h5>
            <h5 class="footer-info">Indirizzo: <span></span></h5>
            <h5 class="footer-info">Telefono: <span></span></h5>
            <h5 class="footer-info">Mail: <span></span></h5>
            <h5 class="footer-info">Pec: <span></span></h5>
        </div>
            <!--* Parte destra -->
        <div class="upper-footer-right w-25 d-flex flex-column">
            <h6>Mappa del sito</h6>
            <h5 class="footer-info">Indirizzo: <span></span></h5>
            <h5 class="footer-info">Telefono: <span></span></h5>
            <h5 class="footer-info">Mail: <span></span></h5>
            <h5 class="footer-info">Pec: <span></span></h5>
        </div>
    </div>

        <!-- $ Parte inferiore del Footer-->
      <div class="lower-footer">
        <a href="#">Dichiarazione di accessibilità</a>
      </div>
    </footer>
</template>

<script>
//import
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.upper-footer{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 7rem;
    background-color: white;
    border-top: .1px solid #5b5b5b;

    .footer-info {
        text-transform: uppercase;
        font-size: .7rem;
        text-align: left;
        max-width: 1400px;

        .upper-footer-left,
        .upper-footer-right {
            max-width: 700px;
            min-width: 500px;
        }
    }
}
.lower-footer{
    background-color: #5b5b5b;
    width: 100%;
    height: 2rem;
    a {
        color: lightblue;
    }
}
</style>
