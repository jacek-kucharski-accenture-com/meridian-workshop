<template>
  <div class="restocking">
    <div class="page-header">
      <h2>{{ t('restocking.title') }}</h2>
      <p>{{ t('restocking.description') }}</p>
    </div>

    <!-- Budget input -->
    <div class="card budget-card">
      <div class="budget-input-row">
        <label class="budget-label">{{ t('restocking.budgetLabel') }}</label>
        <div class="budget-controls">
          <span class="currency-prefix">{{ currencySymbol }}</span>
          <input
            v-model.number="budget"
            type="number"
            min="0"
            step="1000"
            class="budget-input"
            :placeholder="t('restocking.budgetPlaceholder')"
            @keyup.enter="loadRecommendations"
          />
          <button class="generate-btn" @click="loadRecommendations" :disabled="loading || !budget">
            {{ t('restocking.generate') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Loading / Error -->
    <div v-if="loading" class="loading">{{ t('restocking.loading') }}</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <template v-else-if="result">
      <!-- Budget summary -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">{{ t('restocking.budgetSummary.total') }}</div>
          <div class="stat-value">{{ formatCurrency(result.budget) }}</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-label">{{ t('restocking.budgetSummary.used') }}</div>
          <div class="stat-value">{{ formatCurrency(result.budget_used) }}</div>
        </div>
        <div class="stat-card success">
          <div class="stat-label">{{ t('restocking.budgetSummary.remaining') }}</div>
          <div class="stat-value">{{ formatCurrency(result.budget_remaining) }}</div>
        </div>
        <div class="stat-card info">
          <div class="stat-label">{{ t('restocking.table.suggestedQty') }}</div>
          <div class="stat-value">{{ result.recommendations.length }}</div>
        </div>
      </div>

      <!-- Empty states -->
      <div v-if="allCandidatesCount === 0" class="empty-state">
        {{ t('restocking.empty') }}
      </div>
      <div v-else-if="result.recommendations.length === 0" class="empty-state warning-state">
        {{ t('restocking.noMatch') }}
      </div>

      <!-- Recommendations table -->
      <div v-else class="card">
        <div class="card-header">
          <h3 class="card-title">
            {{ t('restocking.title') }} ({{ result.recommendations.length }})
          </h3>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>{{ t('restocking.table.urgency') }}</th>
                <th>{{ t('restocking.table.sku') }}</th>
                <th>{{ t('restocking.table.name') }}</th>
                <th>{{ t('restocking.table.warehouse') }}</th>
                <th>{{ t('restocking.table.category') }}</th>
                <th class="num-col">{{ t('restocking.table.currentStock') }}</th>
                <th class="num-col">{{ t('restocking.table.weeksOfStock') }}</th>
                <th class="num-col">{{ t('restocking.table.suggestedQty') }}</th>
                <th class="num-col">{{ t('restocking.table.unitCost') }}</th>
                <th class="num-col">{{ t('restocking.table.estimatedCost') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in result.recommendations" :key="item.sku + item.warehouse">
                <td>
                  <span :class="['badge', item.urgency]">
                    {{ t(`restocking.urgency.${item.urgency}`) }}
                  </span>
                </td>
                <td><strong>{{ item.sku }}</strong></td>
                <td>{{ translateProductName(item.name) }}</td>
                <td>{{ item.warehouse }}</td>
                <td>{{ item.category }}</td>
                <td class="num-col">{{ item.current_stock.toLocaleString() }}</td>
                <td class="num-col">
                  <span :class="item.urgency === 'critical' ? 'weeks-critical' : 'weeks-warning'">
                    {{ item.weeks_of_stock }}w
                  </span>
                </td>
                <td class="num-col">{{ item.suggested_quantity.toLocaleString() }}</td>
                <td class="num-col">{{ formatCurrency(item.unit_cost) }}</td>
                <td class="num-col"><strong>{{ formatCurrency(item.estimated_cost) }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useFilters } from '../composables/useFilters'
import { useI18n } from '../composables/useI18n'
import { api } from '../api'

export default {
  name: 'Restocking',
  setup() {
    const { selectedLocation, selectedCategory, getCurrentFilters } = useFilters()
    const { t, currentLocale, currentCurrency, translateProductName } = useI18n()

    const budget = ref(50000)
    const loading = ref(false)
    const error = ref(null)
    const result = ref(null)
    const allCandidatesCount = ref(0)

    const currencySymbol = computed(() =>
      currentCurrency.value === 'JPY' ? '¥' : '$'
    )

    const formatCurrency = (num) =>
      new Intl.NumberFormat(currentLocale.value === 'ja' ? 'ja-JP' : 'en-US', {
        style: 'currency',
        currency: currentCurrency.value
      }).format(num || 0)

    const loadRecommendations = async () => {
      if (!budget.value) return
      try {
        loading.value = true
        error.value = null
        const filters = getCurrentFilters()
        // First fetch with a very large budget to know the total candidate count
        const [budgeted, all] = await Promise.all([
          api.getRestockingRecommendations(budget.value, filters),
          api.getRestockingRecommendations(1_000_000_000, filters)
        ])
        result.value = budgeted
        allCandidatesCount.value = all.recommendations.length
      } catch (err) {
        error.value = t('restocking.error') + ': ' + err.message
      } finally {
        loading.value = false
      }
    }

    watch([selectedLocation, selectedCategory], () => {
      if (result.value) loadRecommendations()
    })

    return {
      t, budget, loading, error, result, allCandidatesCount,
      currencySymbol, formatCurrency, translateProductName,
      loadRecommendations
    }
  }
}
</script>

<style scoped>
.budget-card {
  margin-bottom: 1.5rem;
}

.budget-input-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.budget-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.938rem;
  white-space: nowrap;
}

.budget-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.currency-prefix {
  font-weight: 600;
  color: #64748b;
  font-size: 1rem;
}

.budget-input {
  width: 200px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.938rem;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s;
}

.budget-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.generate-btn {
  padding: 0.5rem 1.25rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.generate-btn:hover:not(:disabled) {
  background: #1d4ed8;
}

.generate-btn:disabled {
  background: #93c5fd;
  cursor: not-allowed;
}

.num-col {
  text-align: right;
}

.weeks-critical {
  color: #dc2626;
  font-weight: 700;
}

.weeks-warning {
  color: #d97706;
  font-weight: 600;
}

.empty-state {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.938rem;
  margin-top: 1rem;
}

.warning-state {
  background: #fffbeb;
  border-color: #fde68a;
  color: #92400e;
}
</style>
