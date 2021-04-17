<template>
  <div>
    <!-- begin nav -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">COVID</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">
                Cadastrar
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list-patients">
                Consultar
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/edit-patient/:id"
                tabindex="-1"
                aria-disabled="true"
                >Editar</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- end nav -->
  </div>
  <div class="container mt-5">
    <router-view />
  </div>
</template>
