<template>
  <q-page class="q-pa-sm">
    <div class="q-pa-md">
      <q-card class="card-bg text-black">
        <q-card-section class="text-h6 ">
          <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-item-section side>
              <q-avatar size="100px">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <div class="text-h6">홍길동</div>
              <div class="text-subtitle2">1990.01.01</div>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
    <div class="text-subtitle1 text-h6">Vaccination List</div>
    <div class="row q-col-gutter-lg">      
      <div v-for="(vaccination, index) in vaccination_data" :key="index" class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <card-profile-dark 
          class="q-mt-lg" 
          :vaccName="vaccination.vaccName" 
          :vaccSeq="vaccination.vaccSeq" 
          :vaccineName="vaccination.vaccineName"
          :manufacturer="vaccination.manufacturer"
          :certNo="vaccination.certNo"
          :vaccDate="vaccination.vaccDate"
        > 
        </card-profile-dark>
      </div>
    </div>
  </q-page>
</template>

<script>
  import axiosInstance from "../../boot/axios";
  export default {
      name: "Cards",
      components: {
        
        CardProfileDark: () => import('components/cards/CardProfileDarkVaccination')
        
      },
      data() {
          return {
            vaccination_data: [],
            dense: false,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            profile_card_data:{
              name:'Pratik Patel',
              des:'Solutions Developer',
              avatar:'https://cdn.quasar.dev/img/boy-avatar.png'
            },
            profile_data:{
              name:'Pratik Patel',
              des:'--- Solution Developer, Pune'
            },
            background_img1:'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
            background_img2:'linear-gradient(87deg, rgb(45, 206, 137), rgb(45, 206, 204)) !important'
          }
      },
      mounted: async function () {
        console.log('mount getVaccination')
            await this.getVaccination();
      },
      created() {
        this.profile_data.text=this.text
      },
      methods: {
        getVaccination: async function () {
            console.log('getVaccination');
            axiosInstance.get("/vaccinations").then((Response)=>{
                                // console.log(Response.data);
                                // this.cards_data = JSON.stringify(Response.data.data);
                                this.vaccination_data = Response.data.data;                       
                            }).catch((Error)=>{
                                console.log(Error);
                            });
          }
      }
  }
</script>

<style scoped>

</style>
