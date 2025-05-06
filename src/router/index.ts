import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgendamentoAdmin from '@/views/AgendamentoAdmin.vue'
import FichaTecnica from '@/views/FichaTecnica.vue'
import Login from '@/views/login.vue'
import Usuario from '@/views/usuario.vue'
import ControleEquipamentos from '@/views/ControleEquipamentos.vue'
import ProximasManutencoes from '@/views/proximasManutencoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/agendamento',
      name: 'agendamento',
      component: AgendamentoAdmin,
    },
    {
      path: '/ficha-tecnica',
      name: 'FichaTécnica',
      component: FichaTecnica,
    },
    {
      path: '/usuarios',
      name: 'Usuários',
      component: Usuario,
    },
    {
      path: '/controle-equipamento',
      name: 'Controle de Equipamento',
      component: ControleEquipamentos,
    },
    {
      path: '/proximas-manutencoes',
      name: 'Próximas Manutenções',
      component: ProximasManutencoes,
    },
  ],
})

export default router
