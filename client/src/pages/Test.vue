<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
     <q-btn color="primary" label="did Create" @click="createDID"/>
     <q-btn color="primary" label="Vault Create" @click="createVaultDid"/>
     <q-btn color="primary" label="Vault Get" @click="getVaultDid"/>
    </div>
    <q-card class="bg-transparent no-shadow no-border">
      <!-- <q-card-section class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <q-space/>
          <q-select dense outlined style="min-width: 200px" v-model="type" :options="['All','Free','Paid']"
                    class="float-right" label="Category"/>
        </div>
      </q-card-section> -->
      <q-card-section class="q-mx-sm">
        <div class="row q-col-gutter-lg">
          <div class="col-lg-3 col-sm-12 col-xs-12 col-md-3" v-for="data in getData2" :key="data.incididunt">
            <q-card style="background-color: #292845" class="text-white">
              <q-img :src="data.img">
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white">
                    Loading...
                  </div>
                </template>
              </q-img>
              <q-separator></q-separator>
              <q-card-section class="text-h5 text-center">{{data.title}}</q-card-section>
              <q-card-section class="text-justify">
                <div>{{data.text}}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  color
                  icon="remove_red_eye"
                  class="bg-transparent text-capitalize"
                  flat
                  label="200 Views"
                />

                <q-space/>

                <q-btn color icon="chat_bubble" class="bg-transparent" flat label="56"/>
              </q-card-actions>

            </q-card>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-pagination
          v-model="page"
          :min="currentPage"
          :max="Math.ceil(getData().length/totalPages)"
          :input="true"
          input-class="text-orange-10"
        >
        </q-pagination>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
    import axiosInstance from "../boot/axios";
    import vault from "../pages/vault/vault";
 
    export default {
        name: "TaskBoard",
        data() {
            return {
                cards_data: [
                    
                ],
                type: 'All',
                page: 1,
                currentPage: 1,
                nextPage: null,
                totalPages: 4                
            };
        },
        mounted: async function () {
            await this.getCard()
        },
        computed: {
            getData2() {
                return this.getData().slice((this.page - 1) * this.totalPages, (this.page - 1) * this.totalPages + this.totalPages)
            }
            
        },
        methods: {
          getData() {
                if (this.type == 'All') {
                    return this.cards_data
                } else {
                    let self = this
                    return this.cards_data.filter(function (item) {
                        return item.type.toLowerCase() == self.type.toLowerCase()
                    })
                }
            },
          onClick() {
              axiosInstance.get("/cardinfos").then((Response)=>{
                                console.log(Response.data);
                                // this.cards_data = JSON.stringify(Response.data.data);
                                this.cards_data = Response.data.data;
                            }).catch((Error)=>{
                                console.log(Error);
                            });
              console.log('------------------> ' , this.cards_data)

          },
          getCard: async function () {
            axiosInstance.get("/cardinfos").then((Response)=>{
                                // console.log(Response.data);
                                // this.cards_data = JSON.stringify(Response.data.data);
                                this.cards_data = Response.data.data;                       
                            }).catch((Error)=>{
                                console.log(Error);
                            });
          },
          createDID: async function () {
             const didData=JSON.stringify({"name":"quasar04","signatureType":"Ed25519Signature2018","signatureRepresentation":1,"didKeyType":"Ed25519"});
            // const config = {
            //   method: 'post',
            //   url: '/holder/profile',
            //   data : didData
            // };
            this.$subAxiosInstance.didCreate(didData)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
          },
          createVaultDid: async function () {
             const path='credential/data4';
             const data={ "data": {"name":"quasar10","signatureType":"Ed25519Signature2018","signatureRepresentation":1,"didKeyType":"Ed25519"} };
            
            await vault.vaultDidWrite(path, data);
            
          },
          getVaultDid: async function () {
             const path='credential/data4';
             
             vault.vaultDidGet(path);
          }

        }
    };
</script>


