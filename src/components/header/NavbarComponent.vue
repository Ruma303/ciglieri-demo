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
            <li><router-link class="dropdown-item" to="/comuni">I Comuni</router-link></li>
            <li><a class="dropdown-item" href="#">Piano di Zona</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servizi
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/segretariato">Segretariato Sociale</router-link></li>
            <li><a href="#" class="dropdown-item">Servizio Sociale Professionale</a></li>
            <li><a class="dropdown-item" href="#">Punto Unico di Accesso</a></li>
            <li><a class="dropdown-item" href="#">Assistenza Domiciliare</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link to="/modulistica" class="nav-link text-dark">
            Modulistica
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/albo-pretorio">
            Albo Pretorio
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
