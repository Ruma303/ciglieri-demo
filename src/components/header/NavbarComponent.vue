<template>
  <nav class="navbar navbar-expand-lg p-3">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex align-content-center" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-2" style="--bs-scroll-height: 100px;">

        <router-link to="/" class="navbar-brand">Home</router-link>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark px-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Il Distretto
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Piano di Zona</a></li>
            <li><router-link class="dropdown-item" to="/comuni" >I Comuni</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            Servizi</a>

          <ul class="dropdown-menu">

            <li class="dropend">
              <a class="dropdown-item dropdown-toggle text-dark px-2" href="#" data-bs-toggle="dropdown">Ricevi aiuto</a>
              <ul class="dropdown-menu">
                <li><router-link to="/punto-unico-accesso" class="dropdown-item">Punto Unico d’Accesso</router-link></li>
                <li><router-link to="/segretariato" class="dropdown-item">Segretariato Sociale</router-link></li>
                <li><a href="#" class="dropdown-item">Pronto Intervento Sociale</a></li>
              </ul>
            </li>

            <li class="dropend">
              <a class="nav-link dropdown-toggle text-dark px-2" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Famiglia e minori</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">Assistenza domiciliare socio-educativa</a></li>
                <li><a href="#" class="dropdown-item">Spazio neutro-incontri protetti</a></li>
                <li><a href="#" class="dropdown-item">Assistenza educativa e trasporto alunni diversamente abili</a></li>
                <li><a href="#" class="dropdown-item">Sostegno economico alle famiglie</a></li>
                <li><a href="#" class="dropdown-item">Centro Diurno “Mater Amabilis”</a></li>
                <li><a href="#" class="dropdown-item">Contributi per lo Spettro autistico</a></li>
                <li><a href="#" class="dropdown-item">Centro Antiviolenza</a></li>
              </ul>
            </li>

            <li class="dropend">
              <a class="nav-link dropdown-toggle text-dark px-2" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Supporto per Anziani e Disabili</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">Assistenza Domiciliare Integrata</a></li>
                <li><a href="#" class="dropdown-item">Assistenza domiciliare</a></li>
                <li><a href="#" class="dropdown-item">Centro Anziani</a></li>
                <li><a href="#" class="dropdown-item">Azioni di supporto per i Caregivers</a></li>
                <li><a href="#" class="dropdown-item">Vita Indipendente</a></li>
                <li><a href="#" class="dropdown-item">Dopo di Noi</a></li>
                <li><a href="#" class="dropdown-item">Centro Diurno Disabili Adulti</a></li>
                <li><a href="#" class="dropdown-item">Abbattimento barriere architettoniche</a></li>
                <li><a href="#" class="dropdown-item">Centro Diurno Caffè Alzheimer</a></li>
              </ul>
            </li>

            <li class="dropend">
              <a class="dropdown-item dropdown-toggle text-dark px-2" href="#" data-bs-toggle="dropdown">Inclusione</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">Contributi economici</a></li>
                <li><a href="#" class="dropdown-item">FAMI IMPACT</a></li>
              </ul>
            </li>

          </ul>
        </li>

        <li class="nav-item">
          <router-link to="/modulistica" class="nav-link text-dark">
            Modulistica
          </router-link>
        </li>


        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/amministrazione-trasparente">
            <span class="text-collapse">Amministrazione Trasparente</span>
          </router-link>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success text-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style lang="scss" scoped>
/* .text-collapse {
  overflow-wrap: break-word;
} */

#modulistica-link {
  font-weight: 500;
  //font-size: 1rem;
}
</style>
