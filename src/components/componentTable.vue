<script setup lang="ts">
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { defineProps, useSlots } from 'vue'

interface Column {
  label: string
  field: string
  [key: string]: any
}

interface Props {
  columns: Column[]
  rows: any[]
  searchOptions?: object
  paginationOptions?: object
}

const props = defineProps<Props>()
const slots = useSlots()
</script>

<template>
  <div class="table-responsive">
    <vue-good-table :columns="props.columns" :rows="props.rows"
      :search-options="props.searchOptions ?? { enabled: true }"
      :pagination-options="props.paginationOptions ?? { enabled: true, perPage: 5 }">
      <template #table-row="props">
        <tr>
          <td v-for="col in props.columns" :key="col.field">
            <slot v-if="col.field === 'actions'" name="actions" :row="props.row" :column="col" />
            <span v-else>{{ props.formattedRow[col.field] }}</span>
          </td>
        </tr>
      </template>
    </vue-good-table>
  </div>
</template>

<style scoped>
.table-responsive {
  overflow-x: auto;
}
</style>
