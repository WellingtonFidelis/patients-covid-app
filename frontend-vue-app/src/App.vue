<template>
  <div class="">
    <!-- begin nav -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
        <router-link class="navbar-brand" to="/">COVID-19</router-link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="active"
                aria-current="page"
                to="/create-patient"
              >
                Cadastrar
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list-patients">
                Consultar
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link
                class="nav-link"
                to="/edit-patient/:id"
                tabindex="-1"
                aria-disabled="true"
                >Editar</router-link
              >
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <!-- end nav -->
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>
