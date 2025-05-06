<template>
    <main>
        <div class="container-fluid">
            <h1 class="font-bold mb-4">Cadastro de Usuários</h1>

            <form @submit.prevent="addUser" class="row">
                <div class="col-12 col-md-4 my-1">
                    <label class="form-label">Nome</label>
                    <input v-model="form.nome" type="text" placeholder="Nome" class="form-control" required />
                </div>
                <div class="col-12 col-md-4 my-1">
                    <label class="form-label">E-mail</label>
                    <input v-model="form.email" type="email" placeholder="Email" class="form-control" required />
                </div>
                <div class="col-12 col-md-4 my-1">
                    <label class="form-label">CPF</label>
                    <input v-model="form.cpf" type="text" placeholder="CPF" class="form-control" required />
                </div>
                <div class="col-12 col-md-4 my-1">
                    <label class="form-label">Telefone</label>
                    <input v-model="form.telefone" type="tel" placeholder="Telefone" class="form-control" required />
                </div>
                <div class="col-12 col-md-4 my-1">
                    <label class="form-label">Endereço</label>
                    <input v-model="form.endereco" type="text" placeholder="Endereço" class="form-control" required />
                </div>
                <div class="col-12 col-md-4 my-1">
                    <label for="tipo" class="form-label">Tipo</label>
                    <select id="tipo" v-model="form.tipo" class="form-control" required>
                        <option disabled value="">Selecione o Tipo</option>
                        <option value="cliente">Cliente</option>
                        <option value="funcionario">Funcionário</option>
                    </select>
                </div>
                <div class="col-12 my-1 text-end">
                    <button type="submit" class="btn btn-primary">
                        Adicionar Usuário
                    </button>
                </div>
            </form>


            <div class="row">
                <div class="col-12">
                    <componentTable :columns="columns" :rows="users">
                        <template #actions="{ row }">
                            <button class="btn btn-sm btn-warning me-1" @click="editUser(row)">Editar</button>
                            <button class="btn btn-sm btn-danger" @click="removeUser(row)">Remover</button>
                        </template>
                    </componentTable>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import componentTable from '../components/componentTable.vue'

interface User {
    nome: string
    email: string
    cpf: string
    telefone: string
    endereco: string
    tipo: string
}

const form = ref<User>({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    tipo: '',
})

const users = ref<User[]>([])

const columns = [
    { label: 'Nome', field: 'nome' },
    { label: 'Email', field: 'email' },
    { label: 'CPF', field: 'cpf' },
    { label: 'Telefone', field: 'telefone' },
    { label: 'Endereço', field: 'endereco' },
    { label: 'Tipo', field: 'tipo' },
    { label: 'Ações', field: 'actions' }, // importante para ativar o slot
]

function addUser() {
    users.value.push({ ...form.value })
    form.value = {
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        endereco: '',
        tipo: '',
    }
}

function editUser(user: User) {
    alert(`Editar usuário: ${user.nome}`)
}

function removeUser(user: User) {
    users.value = users.value.filter(u => u !== user)
}
</script>