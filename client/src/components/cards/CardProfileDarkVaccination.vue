<template>
  <q-card class="text-white" style="background-color: #181c4d">
    <q-card-section>
      <div class="q-pa-sm">
        질병관리청
      </div>
      <div class="text-h6 q-pa-sm">
        {{ vaccName }} - {{ vaccSeq }} 차
      </div>
      <div class="text-h8 q-pa-sm">
        {{ vaccineName }}/{{ manufacturer }} | {{certNo}}
      </div>
      <div class="q-pa-sm">
        접종명 {{ vaccName }}
      </div>
      <div class="q-pa-sm">
        접종일자 {{ vaccDate }}
      </div>
      <q-item-section avatar>
                <q-icon color="primary" name="check_circle_outline"/>
          </q-item-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CardProfileDarkVaccination",
  props:['vaccName','vaccSeq','vaccineName', 'manufacturer', 'certNo', 'vaccDate']
}
</script>

<style scoped>

</style>
