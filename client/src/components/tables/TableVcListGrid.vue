<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        Issue Verifiable Credential 
      </div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pa-none">
      <q-table grid :data="data" :columns="columns" hide-bottom>
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <!-- <card-profile :avatar="props.row.avatar" :name="props.row.name" :des="props.row.des"></card-profile>
             -->
            <card-vc-profile :avatar="props.row.avatar" :name="props.row.name" :des="props.row.des"></card-vc-profile>
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import CardVcProfile from "components/cards/CardVcProfile";
export default {
  name: "TableVcListGrid",
  components: {CardVcProfile},
  data() {
    return {
      columns: [
        {name: 'Name', label: 'Name', field: 'name', sortable: true, align: 'left'},
        {name: 'Crated Date', label: 'Crated Date', field: 'Crated_Date', sortable: true, align: 'left'},
        {name: 'Project', label: 'Project', field: 'Project', sortable: true, align: 'left'},
        {name: 'Action', label: '', field: 'Action', sortable: false, align: 'center'}
      ],
      data: [
        {
          name: 'Seegene',
          Crated_Date: '15/3/2020',
          Project: 'seegene',
          avatar: 'https://image.pitchbook.com/IJSUxhxadK5MJP7JEr4RXMO61c21454915153346_200x200',
          progress: 80,
          des: 'Multiplex molecular diagnostics'
        },
        {
          name: 'NDS',
          Crated_Date: '10/2/2018',
          Project: 'NDS',
          avatar: 'http://nds.nongshim.co.kr/file/nds/photo/NDS[2][1].jpg',
          progress: 50,
          des: 'Employee Card'
        },
        {
          name: 'Seoul Metropolitan Library',
          Crated_Date: '10/2/2018',
          Project: 'Seoul Metropolitan Library',
          avatar: 'http://t1.daumcdn.net/brunch/service/user/ocv/image/Fw2rn8MZigT6fCvqc2ZOBmLkZLA.jpg',
          progress: 100,
          des: 'Seoul Metropolitan Library Card'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
