<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-2" style="--bs-scroll-height: 100px;">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Il Distretto
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/comuni">I Comuni</router-link></li>
            <li><router-link class="dropdown-item" to="/piano-di-zona">Piano di Zona</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servizi
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Segretariato Sociale</a></li>
            <li><a class="dropdown-item" href="#">Servizio Sociale Professionale</a></li>
            <li><a class="dropdown-item" href="#">Punto Unico di Accesso</a></li>
            <li><a class="dropdown-item" href="#">Assistenza Domiciliare</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Modulistica
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Altro link</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Altro link</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Avvisi
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Altro link</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Altro link</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success text-white" type="submit">Search</button>
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
</style>
