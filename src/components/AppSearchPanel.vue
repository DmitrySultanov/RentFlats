<template>
  <div class="search-panel">
    <div class="dividir"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <nav class="search-panel navbar navbar-expand-lg navbar-dark bg-red rounded">
            <div class="navbar-collapse" id="navbarSupportedContent">
              <form class="flex">
                <div class="form-group select select--size">
                    <template>
                      <div>
                        <vue-multiselect
                          v-model="fetchData.sizeSelected"
                          :options="optionsQuantitat"
                          :hideSelected="true"
                          placeholder="Количество комнат"
                          >
                        </vue-multiselect>
                      </div>
                    </template>
                </div>
                <div class="form-group select select--cost">
                  <template>
                    <div>
                      <vue-multiselect
                        v-model="fetchData.costSelected"
                        :options="optionsCosts"
                        placeholder="Стоймость, руб."
                        >
                      </vue-multiselect>
                    </div>
                  </template>
                </div>
                <div class="form-group select select--district">
                  <template>
                    <div>
                      <vue-multiselect
                        v-model="fetchData.districtSelected"
                        :options="optionsDistricts"
                        placeholder="Интересует конкретный район?"
                        :multiple="true"
                        >
                      </vue-multiselect>
                    </div>
                  </template>
                </div>
                <button class="btn btn-primary" type="submit" @click.prevent="getFetchData()">Поиск</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMultiselect from 'vue-multiselect'
  export default {
    components: { VueMultiselect },
    data () {
      return {
        fetchData: {
          sizeSelected: null,
          costSelected: null,
          districtSelected: null,
        },
        optionsQuantitat: ['1', '2', '3+', 'комната/студия'],
        optionsCosts: ['Не имеет значения', '30 000+', 'до 30 000', 'до 25 000', 'до 20 000', 'до 15 000'],
        optionsDistricts: ['Адмиралтейский', 'Василеостровский', 'Выборгский', 'Калининский', 'Кировский', 'Курортный', 'Колпинский', 'Красногвардейский', 'Красносельский', 'Кронштадтский', 'Московский', 'Петроградский', 'Петродворцовый', 'Приморский', 'Пушкинский', 'Невский', 'Фрунзенский', 'Центральный'],
      }
    },
    methods: {
      getFetchData () {
        console.log(this.fetchData.sizeSelected, this.fetchData.costSelected, this.fetchData.districtSelected)
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


