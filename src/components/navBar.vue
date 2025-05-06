<!-- Apenas a parte do <template> foi ajustada -->
<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <aside class="sidebar d-flex flex-column p-3">
      <div class="logo mb-4 text-center fw-bold fs-4">
        <img src="../assets/img/logo.png" class="logo-icon ms-2" alt="Logo Icon" />
        <img src="../assets/img/logoText.png" class="logo-text ms-3" alt="Logo Text" />
      </div>

      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center" to="/" active-class="active">
            <i class="fas fa-chart-line me-2"></i>
            <span class="link-text">Dashboard</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center" to="/agendamento" active-class="active">
            <i class="fas fa-calendar-check me-2"></i>
            <span class="link-text">Agendamentos</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center" to="/proximas-manutencoes" active-class="active">
            <i class="fas fa-tools me-2"></i>
            <span class="link-text">Próximas Manutenções</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center" to="/ficha-tecnica" active-class="active">
            <i class="fas fa-file-alt me-2"></i>
            <span class="link-text">Ficha Técnica</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center" to="/controle-equipamento" active-class="active">
            <i class="fas fa-cogs me-2"></i>
            <span class="link-text">Controle de Equipamento</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link d-flex align-items-center" to="/usuarios" active-class="active">
            <i class="fas fa-users me-2"></i>
            <span class="link-text">Usuários</span>
          </router-link>
        </li>
      </ul>
    </aside>

    <div class="main w-100">
      <!-- Topbar -->
      <nav class="navbar navbar-light bg-white px-4 py-2 shadow-sm sticky-top">
        <div class="d-flex align-items-center w-100 justify-content-end py-2">
          <div class="icons d-flex align-items-center gap-3">
            <i class="fas fa-globe"></i>
            <i class="fas fa-user-circle fs-4"></i>
          </div>
        </div>
      </nav>

      <!-- Conteúdo -->
      <main class="p-4">
        <slot></slot>
      </main>
    </div>
  </div>
</template>


<style scoped>
.sidebar {
  width: 90px;
  transition: width 0.3s ease;
  background: #fff;
  border-right: 1px solid #dee2e6;
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 1030;
}

.sidebar:hover {
  width: 280px;
}

.sidebar .logo {
  font-size: 1.25rem;
  white-space: nowrap;
  transition: opacity 0.3s;
}

/* Começa com sidebar recolhida */
.sidebar .logo-icon {
  display: block;
  /* Exibe o logo com ícone quando a sidebar estiver recolhida */
  width: 40px;
  margin: 0 auto;
}

.sidebar .logo-text {
  display: none;
  /* Esconde o logo com texto quando a sidebar está recolhida */
  width: 75%;
}

/* Quando a sidebar estiver expandida (hover) */
.sidebar:hover .logo-icon {
  display: none;
  /* Esconde o logo com ícone quando a sidebar estiver expandida */
}

.sidebar:hover .logo-text {
  display: block;
  /* Exibe o logo com texto quando a sidebar estiver expandida */
}

.link-text {
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar:hover .link-text {
  opacity: 1;
}

.nav-link {
  color: #333;
  padding: 0.75rem 1rem;
  font-weight: 500;
}

.nav-link.active {
  background-color: #0f4467;
  color: white;
}

.nav-link i {
  width: 20px;
  min-width: 20px;
  text-align: center;
}

.main {
  flex: 1;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}

main {
  flex: 1;
  overflow-y: auto;
}
</style>