<template>
  <q-page class="container">
    <div class="row justify-center">
      <div class="col-12 q-pt-lg text-center text-blue-grey-9">
        <span class="text-subtitle1">
          plaintext : {{plainText}}
        </span>
      </div>
      <div class="col-12 q-pt-lg text-center text-blue-grey-9">
        <span class="text-subtitle1">
          cyperText : {{cyperText}}
        </span>
      </div>
      <div class="col-12 q-pt-lg text-center text-blue-grey-9">
        <span class="text-subtitle1">
          associateData : {{associateData}}
        </span>
      </div>
      <div class="col-12 q-pt-lg text-center text-blue-grey-9">
        <span class="text-subtitle1">
          decryptText : {{decryptText}}
        </span>
      </div>
      <div class="col-10 q-pt-lg">
        <q-input rounded outlined v-model="decryptText" label="Value" />
      </div>
      <div class="col-12 q-pt-md text-center">
        <qriously :value="decryptText" :size="230" />
      </div>
      <q-btn
        color="blue-grey-10"
        outline
        label="Donwload"
        @click="donwloadCanvas"
      />
      <q-btn
        color="blue-grey-10"
        outline
        label="crypto test"
        @click="tinkcrypto"
      />
    </div>
  </q-page>
</template>

<script>
import CryptoJS from "crypto-js"

export default {
  name: 'MobileIndex',
  data () {
    return {
      text: 'https://www.naver.com/',
      plainText: 'https://www.naver.com/',
      cyperText: '',
      associateData: '1234',
      decryptText: ''
    }
  },
  methods: {
    donwloadCanvas () {
      const canvas = document.getElementsByTagName('canvas')
      const link = document.createElement('a')
      link.download = 'QRCode.png'
      link.href = canvas[0].toDataURL()
      link.click()
    },
    tinkcrypto () {
      this.cyperText = CryptoJS.AES.encrypt(this.plainText, this.associateData).toString()
      const bytes = CryptoJS.AES.decrypt(this.cyperText, this.associateData)
      this.decryptText = bytes.toString(CryptoJS.enc.Utf8)

      
    //   var data = [{id: 1}, {id: 2}]
    //   //Encrypt
    //   var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
    //   // Decrypt
    //   var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    //   var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
  }
}
</script>