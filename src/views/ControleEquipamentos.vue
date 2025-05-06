<template>
    <main class="container-fluid">
        <h1 class="font-bold mb-4">Controle de Equipamentos</h1>

        <!-- Formulário -->
        <form @submit.prevent="adicionarEquipamento" class="row mb-4">
            <div class="col-md-4 mb-2">
                <label>Nome</label>
                <input v-model="form.nome" class="form-control" required />
            </div>

            <div class="col-md-2 mb-2">
                <label>Código</label>
                <input v-model="form.codigo" class="form-control" required />
            </div>

            <div class="col-md-2 mb-2">
                <label>Quantidade Atual</label>
                <input type="number" v-model="form.quantidade" class="form-control" required />
            </div>

            <div class="col-md-2 mb-2">
                <label>Quantidade Mínima</label>
                <input type="number" v-model="form.minima" class="form-control" required />
            </div>

            <div class="col-md-2 mb-2">
                <label>Unidade</label>
                <input v-model="form.unidade" class="form-control" />
            </div>

            <div class="col-md-4 mb-2">
                <label>Local</label>
                <input v-model="form.local" class="form-control" />
            </div>

            <div class="col-md-4 mb-2">
                <label>Categoria</label>
                <input v-model="form.categoria" class="form-control" />
            </div>

            <div class="col-12 text-end">
                <button type="submit" class="btn btn-primary">Adicionar</button>
            </div>
        </form>

        <!-- Tabela -->
        <componentTable :columns="columns" :rows="equipamentos">
            <template #actions="{ row }">
                <button class="btn btn-sm btn-warning me-1" @click="editar(row)">Editar</button>
                <button class="btn btn-sm btn-danger" @click="remover(row)">Remover</button>
            </template>
        </componentTable>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import componentTable from '@/components/componentTable.vue'

interface Equipamento {
    nome: string
    codigo: string
    quantidade: number
    minima: number
    unidade: string
    local: string
    categoria: string
}

const form = ref<Equipamento>({
    nome: '',
    codigo: '',
    quantidade: 0,
    minima: 0,
    unidade: '',
    local: '',
    categoria: '',
})

const equipamentos = ref<Equipamento[]>([])

const columns = [
    { label: 'Nome', field: 'nome' },
    { label: 'Código', field: 'codigo' },
    { label: 'Qtd Atual', field: 'quantidade' },
    { label: 'Qtd Mínima', field: 'minima' },
    { label: 'Unidade', field: 'unidade' },
    { label: 'Local', field: 'local' },
    { label: 'Categoria', field: 'categoria' },
    { label: 'Ações', field: 'actions' },
]

function adicionarEquipamento() {
    equipamentos.value.push({ ...form.value })
    form.value = {
        nome: '',
        codigo: '',
        quantidade: 0,
        minima: 0,
        unidade: '',
        local: '',
        categoria: '',
    }
}

function remover(equip: Equipamento) {
    equipamentos.value = equipamentos.value.filter(e => e !== equip)
}

function editar(equip: Equipamento) {
    alert(`Editar equipamento: ${equip.nome}`)
}
</script>