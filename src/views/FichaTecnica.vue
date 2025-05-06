<template>
    <div class="container mt-5">
        <h3 class="mb-4">Ficha Técnica</h3>

        <!-- Formulário -->
        <form @submit.prevent class="row g-3" ref="formRef">
            <div class="col-md-6">
                <label class="form-label">Nome do Produto</label>
                <input v-model="ficha.nome" class="form-control" required />
            </div>

            <div class="col-md-6">
                <label class="form-label">Código</label>
                <input v-model="ficha.codigo" class="form-control" required />
            </div>

            <div class="col-12">
                <label class="form-label">Descrição</label>
                <textarea v-model="ficha.descricao" class="form-control" rows="3" />
            </div>

            <div class="col-12">
                <label class="form-label">Materiais Utilizados</label>
                <input v-model="ficha.materiais" class="form-control" />
            </div>

            <div class="col-md-4">
                <label class="form-label">Altura (cm)</label>
                <input type="number" v-model="ficha.altura" class="form-control" />
            </div>

            <div class="col-md-4">
                <label class="form-label">Largura (cm)</label>
                <input type="number" v-model="ficha.largura" class="form-control" />
            </div>

            <div class="col-md-4">
                <label class="form-label">Profundidade (cm)</label>
                <input type="number" v-model="ficha.profundidade" class="form-control" />
            </div>

            <div class="col-12">
                <label class="form-label">Observações</label>
                <textarea v-model="ficha.observacoes" class="form-control" rows="2" />
            </div>

            <div class="col-12">
                <button class="btn btn-success" @click="gerarPDF">Gerar PDF</button>
            </div>
        </form>

        <!-- Prévia da Ficha -->
        <div class="mt-5 p-4" ref="previewRef" id="ficha-preview"
            style="background: white; border: 1px solid #ccc; border-radius: 8px">
            <div class="text-center mb-4">
                <img src="../assets/img/logo.png" alt="Logo" width="120" class="mb-2" />
                <h4 class="mb-0">Ficha Técnica</h4>
            </div>

            <hr />

            <div>
                <p><strong>Nome do Produto:</strong> {{ ficha.nome }}</p>
                <p><strong>Código:</strong> {{ ficha.codigo }}</p>
                <p><strong>Descrição:</strong> {{ ficha.descricao }}</p>
                <p><strong>Materiais Utilizados:</strong> {{ ficha.materiais }}</p>
                <p>
                    <strong>Medidas:</strong>
                    {{ ficha.altura }}cm (A) × {{ ficha.largura }}cm (L) × {{ ficha.profundidade }}cm (P)
                </p>
                <p><strong>Observações:</strong> {{ ficha.observacoes }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const formRef = ref<HTMLFormElement | null>(null)
const previewRef = ref<HTMLElement | null>(null)

const ficha = ref({
    nome: '',
    codigo: '',
    descricao: '',
    materiais: '',
    altura: '',
    largura: '',
    profundidade: '',
    observacoes: '',
})

const gerarPDF = async () => {
    if (!previewRef.value) return

    const canvas = await html2canvas(previewRef.value, {
        scale: 2,
        useCORS: true,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')

    const pageWidth = pdf.internal.pageSize.getWidth()
    const imgProps = pdf.getImageProperties(imgData)
    const ratio = imgProps.width / imgProps.height
    const pdfHeight = pageWidth / ratio

    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pdfHeight)
    pdf.save(`FichaTecnica_${ficha.value.codigo || 'produto'}.pdf`)
}
</script>