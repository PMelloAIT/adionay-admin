<template>
    <div class="container-fluid mt-4">
        <h3>Agendamento</h3>
        <div class="container">
            <form @submit.prevent="handleSubmit" class="row g-3 mb-4">
                <div class="col-md-4">
                    <label class="form-label">Data</label>
                    <VueDatePicker v-model="form.date" :highlight="highlightedDates" />
                </div>

                <div class="col-md-4">
                    <label class="form-label">Horário</label>
                    <input type="time" class="form-control" v-model="form.time" required />
                </div>

                <div class="col-md-4">
                    <label class="form-label">Local</label>
                    <input type="text" class="form-control" v-model="form.location" required />
                </div>

                <div class="col-md-6">
                    <label class="form-label">Nome do Cliente</label>
                    <input type="text" class="form-control" v-model="form.clientName" required />
                </div>

                <div class="col-md-6">
                    <label class="form-label">Status</label>
                    <select class="form-select" v-model="form.status" required>
                        <option value="ativo">Ativo</option>
                        <option value="pendente">Pendente</option>
                        <option value="concluido">Concluído</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </div>

                <div class="col-12">
                    <button class="btn btn-primary">Agendar</button>
                </div>
            </form>
        </div>



        <h5>Agendamentos</h5>
        <ul class="list-group">
            <li v-for="(item, index) in appointments" :key="index"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>{{ item.clientName }}</strong><br />
                    {{ item.date.toLocaleDateString() }} às {{ item.time }} - {{ item.location }}
                </div>
                <span class="badge text-bg-secondary text-capitalize">
                    {{ item.status }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

interface Appointment {
    date: Date
    time: string
    location: string
    clientName: string
    status: string
}

const form = ref<Appointment>({
    date: new Date(),
    time: '',
    location: '',
    clientName: '',
    status: 'pendente',
})

const appointments = ref<Appointment[]>([])

const handleSubmit = () => {
    appointments.value.push({ ...form.value })
    form.value = {
        date: new Date(),
        time: '',
        location: '',
        clientName: '',
        status: 'pendente',
    }
}

// Computa datas para destaque no calendário
const highlightedDates = computed(() =>
    appointments.value.map((a) => a.date)
)
</script>