<template>
    <main class="container py-4">
        <h1 class="mb-4 fw-bold">Próximas Manutenções</h1>

        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4" v-for="(item, index) in manutencoesOrdenadas" :key="index">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title d-flex justify-content-between align-items-center">
                                {{ item.equipamento }}
                                <span class="badge"
                                    :class="item.status === 'pendente' ? 'bg-warning text-dark' : 'bg-success'">
                                    {{ item.status === 'pendente' ? 'Pendente' : 'Concluída' }}
                                </span>
                            </h5>

                            <ul class="list-unstyled small text-muted mt-3">
                                <li><strong>Tipo:</strong> {{ item.tipo }}</li>
                                <li><strong>Data:</strong> {{ formatarData(item.data) }}</li>
                                <li><strong>Responsável:</strong> {{ item.responsavel }}</li>
                            </ul>
                        </div>

                        <div class="mt-3">
                            <button v-if="item.status === 'pendente'" class="btn btn-sm btn-success w-100"
                                @click="darBaixa(item)">
                                Dar baixa
                            </button>
                            <div v-else class="text-center text-muted small">Já concluída</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Manutencao {
    equipamento: string
    tipo: string
    data: string
    responsavel: string
    status: 'pendente' | 'concluida'
}

const manutencoes = ref<Manutencao[]>([
    {
        equipamento: 'Gerador 01',
        tipo: 'Preventiva',
        data: '2025-05-10',
        responsavel: 'Carlos Silva',
        status: 'pendente',
    },
    {
        equipamento: 'Compressor A-21',
        tipo: 'Corretiva',
        data: '2025-05-07',
        responsavel: 'João Lima',
        status: 'concluida',
    },
    {
        equipamento: 'Painel Elétrico',
        tipo: 'Preventiva',
        data: '2025-05-12',
        responsavel: 'Fernanda Souza',
        status: 'pendente',
    },
    {
        equipamento: 'Elevador 3',
        tipo: 'Preventiva',
        data: '2025-05-15',
        responsavel: 'Ricardo Torres',
        status: 'pendente',
    },
])

const manutencoesOrdenadas = computed(() =>
    [...manutencoes.value].sort((a, b) => a.data.localeCompare(b.data))
)

function darBaixa(item: Manutencao) {
    item.status = 'concluida'
}

function formatarData(data: string) {
    const d = new Date(data)
    return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}
</script>