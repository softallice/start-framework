<template>
  <div class="q-pa-md" >
    <q-card flat bordered class="q-mt-sm" >
      <q-card-section >
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6 text-indigo-8" >
              Verifiable Credential List
            </div>
            <div class="text-subtitle2">
              Get Vault Data
            </div>
          </div>

        
          <div class="col-auto">
            <q-btn 
              color="primary" 
              icon="note_add" 
              label="Create VC"
              @click="card = true"
            />
          </div>  
        </div>
      </q-card-section>
    </q-card>
    
    <p></p>

    <q-list bordered class="rounded-borders">
      <div v-for="(issue, index) in issueVcTest" :key="index">
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="fact_check" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            {{issue.credentialSubject.email}}
          </q-item-section>

          <q-item-section side>
            <div class="row items-center">
              <q-icon name="admin_panel_settings" color="red" size="24px" />
              <!-- <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" /> -->
            </div>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
            {{issue.description}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
      
      <q-separator />
      </div>
    </q-list>
    <!-- pop up -->
    <q-dialog v-model="card">
      <q-card class="my-card">
        <!-- <table-custom-grid class="q-mt-lg"></table-custom-grid> -->
        <table-vc-list-grid class="q-mt-lg"></table-vc-list-grid>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import TableVcListGrid from '../../components/tables/TableVcListGrid.vue';
import vault from "../../pages/vault/vault";

export default {
  name: "IssueVC",
  components: {
    TableVcListGrid: () => import('components/tables/TableVcListGrid')
  },
  data() {
    return {
      issueVc : {},
      id: this.$store.state.auth.user.did.did,
      issueVcTest : [
        {"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1","https://trustbloc.github.io/context/vc/examples-ext-v1.jsonld","https://sohee227.github.io/example_v1.jsonld","https://trustbloc.github.io/context/vc/examples-v1.jsonld"],"credentialStatus":{"id":"https://issuer-vcs.trustbloc.local/status/3","type":"CredentialStatusList2017"},"credentialSubject":{"birth":"1993-07-14","customerid":"1234568","diorti":"12345","email":"123@naver.com","expdate":"2020-09-30","gender":"Woman","id":"","name":"Foo"},"description":"Covid-19 Vaccination","id":"did:trustbloc:testnet.trustbloc.local:EiBlaCW9-z6ONAxPWUEssUBhI0EodR2q3froRADgtRNzVw","issuanceDate":"2020-07-24T14:39:10.00678804Z","issuer":{"id":"did:trustbloc:testnet.trustbloc.local:EiAPonNT4IKURDpDfZBZJXk1IVF8ODonxb2UB9uuE6FEsA","name":"honeybloc-ed25519signature2018-ed25519"},"name":"My+Data","proof":{"created":"2021-02-03T03:23:28.147310158Z","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19.._ntvLp4Y4nvOLfUxSFeIRzVa9PNoKPDD9fpJxemak1a7PsFOJLHGPa5qP09R4pa1nu-gRlyHEt-2nMZ0FQ_JCQ","proofPurpose":"assertionMethod","type":"Ed25519Signature2018","verificationMethod":"did:trustbloc:testnet.trustbloc.local:EiDOuREl9ezimocYCRX0fAeoIEmYlsELxXD-x8EYC3SCeA#1fJnwZZLXLn6VRmo0cVkQF9pkeRqMZbjltzptJKmQPM"},"type":["VerifiableCredential","MyData"]},
        {"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1","https://trustbloc.github.io/context/vc/examples-ext-v1.jsonld","https://sohee227.github.io/example_v1.jsonld","https://trustbloc.github.io/context/vc/examples-v1.jsonld"],"credentialStatus":{"id":"https://issuer-vcs.trustbloc.local/status/3","type":"CredentialStatusList2017"},"credentialSubject":{"birth":"1993-07-14","customerid":"1234568","diorti":"12345","email":"aaa@daum.com","expdate":"2020-09-30","gender":"Woman","id":"","name":"Foo"},"description":"B-test Vaccination","id":"did:trustbloc:testnet.trustbloc.local:EiBlaCW9-z6ONAxPWUEssUBhI0EodR2q3froRADgtRNzVw","issuanceDate":"2020-07-24T14:39:10.00678804Z","issuer":{"id":"did:trustbloc:testnet.trustbloc.local:EiAPonNT4IKURDpDfZBZJXk1IVF8ODonxb2UB9uuE6FEsA","name":"honeybloc-ed25519signature2018-ed25519"},"name":"My+Data","proof":{"created":"2021-02-03T03:23:28.147310158Z","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19.._ntvLp4Y4nvOLfUxSFeIRzVa9PNoKPDD9fpJxemak1a7PsFOJLHGPa5qP09R4pa1nu-gRlyHEt-2nMZ0FQ_JCQ","proofPurpose":"assertionMethod","type":"Ed25519Signature2018","verificationMethod":"did:trustbloc:testnet.trustbloc.local:EiDOuREl9ezimocYCRX0fAeoIEmYlsELxXD-x8EYC3SCeA#1fJnwZZLXLn6VRmo0cVkQF9pkeRqMZbjltzptJKmQPM"},"type":["VerifiableCredential","MyData"]}
      ],
      card: false
    }
  },
  mounted: function () {
    this.getVc()
  },
  methods: {
    createVc: async function() {
      this.issueVc = await this.getIssueVc();
      console.log('this.issueVc', this.issueVc);
    },
    getVc: async function() {
      this.issueVcTest.push(JSON.parse(await this.getVaultVc()));
      console.log(this.issueVcTest);
      console.log(this.issueVcTest.length);
    },
    getIssueVc: async function () { 
      const vcSubject=JSON.stringify({
                "credential": {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1",
                    "https://www.w3.org/2018/credentials/examples/v1",
                    "https://trustbloc.github.io/context/vc/examples-ext-v1.jsonld",
                    "https://sohee227.github.io/example_v1.jsonld"  
                ],
                "credentialSubject": {
                    "birth": "1993-07-14",
                    "customerid": "1234568",
                    "diorti": "12345",
                    "email": "foo@bar.com",
                    "expdate": "2020-09-30",
                    "gender": "Woman",
                    "id": "",
                    "name": "Foo"
                },
                "description": "My+Data+for+Mr.Foo",
                "id": this.id,
                "issuanceDate": "2020-07-24T14:39:10.00678804Z",    
                "issuer": {
                    "id": "did:trustbloc:testnet.trustbloc.local:EiAPonNT4IKURDpDfZBZJXk1IVF8ODonxb2UB9uuE6FEsA",  
                    "name": "honeybloc-ed25519signature2018-ed25519"    
                },
                "name": "My+Data",
                "type": [
                    "VerifiableCredential",
                    "MyData"
                ]
            }
      });      
      var vc_test;
      await this.$issueAxiosInstance.vcCreate(vcSubject)
        .then(function (response) {
          vc_test =  JSON.stringify(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      return vc_test;
    },
    createVaultVc: async function () {
        const path='credential/' + this.id;
        const data={ "data": this.issueVc };
      
      await vault.vaultDidWrite(path, data);
      
    },
    getVaultVc: async function () {
        const path='credential/' + this.id;
        var issue_vctest;
        
        await vault.vaultDidGet(path).then(function (response) {
          console.log('response', response)
          issue_vctest = response.data;
        }).catch(function (error) {
          console.log(error);
        });

        return issue_vctest
    }
  }
}      
</script>

<style scoped>

</style>

