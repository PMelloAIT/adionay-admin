<template>
    <div class="login-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div class="login-box shadow rounded bg-white p-5" style="max-width: 400px; width: 100%">
            <!-- Logo -->
            <div class="text-center mb-4">
                <img src="../assets/img/logoText.png" alt="Logo" class="w-75" />
            </div>
            <!-- Formulário de Login -->
            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label class="form-label">E-mail</label>
                    <input v-model="email" type="email" class="form-control" placeholder="Digite seu e-mail" required />
                </div>
                <div class="mb-3">
                    <label class="form-label">Senha</label>
                    <input v-model="senha" type="password" class="form-control" placeholder="Digite sua senha"
                        required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Entrar</button>
            </form>

            <div class="text-center my-3">
                <small class="text-muted">ou</small>
            </div>

            <!-- Botão Login com Google -->
            <button @click="loginComGoogle"
                class="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center">
                <i class="fab fa-google me-2"></i> Entrar com Google
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const senha = ref('')

const handleLogin = () => {
    // Lógica de autenticação normal aqui
    alert(`Login com: ${email.value}`)
}

const loginComGoogle = () => {
    // Lógica de autenticação com Google aqui
    alert('Login com Google iniciado...')
}
</script>

<style scoped>
.login-wrapper {
    background: linear-gradient(135deg, #f2f6fa, #e9eff5);
}

.login-box {
    border: 1px solid #dee2e6;
}

button:focus {
    outline: none;
    box-shadow: none;
}
</style>