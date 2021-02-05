<template>
  <q-page>
    <div class="row">
      <span class="text-subtitle2 text-red-9">
          {{ devcomment }}
      </span>
      <div
        v-if="!showCamera"
        class="col-12 text-center q-pt-md"
      >
          <img
          alt="Framework logo"
          src="../../assets/img/nds-qrcode.png"
          style="width: 340px"
        >
      </div>
    </div>
    <div class="row justify-center q-pt-lg">
       <div class="col-12 text-center" style="max-width: 450px">
        <span class="text-subtitle2 text-grey-9">
          {{ textInfo }}
        </span>
        <div class="col-10 q-pt-lg">
          <q-btn color="blue-grey-10" rounded icon="camera_alt" label="Read QRCode"
            class="full-width" size="lg" @click="turnCameraOn()"
            v-show="!showCamera"/>
        </div>
          <p class="text-subtitle1" v-if="result">Last result: <b>{{ result }}</b></p>
          <div v-if="showCamera">
            <qrcode-stream :camera="camera" @decode="onDecode">
            </qrcode-stream>
          </div>
        <div class="col-10 q-pt-lg">
          <q-btn color="blue-grey-10" rounded icon="camera_alt" label="Cancel"
            class="full-width" size="lg" @click="turnCameraOff()"
            v-show="showCamera"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  name: 'PageIndex',
  components: { QrcodeStream },
  data () {
    return {
      isValid: undefined,
      camera: 'auto',
      result: null,
      showCamera: false,
      devcomment: 'chrome://flags/#unsafely-treat-insecure-origin-as-secure 기능 활성화 및 테스트 url(포트 포함) 넣기 , 크롬에서 기기(카메라 등)의 제어가 가능, 테스트 용도로만 사용하고 실 환경에서는 https 구성하여 사용해야함'
    }
  },
  computed: {
    textInfo () {
      return this.showCamera ? 'position the qrcode on the camera' : 'Press the button and scan a qrcode.'
    }
  },
  methods: {
    async onDecode (content) {
      this.result = content
      this.turnCameraOff()
    },
    turnCameraOn () {
      this.camera = 'auto'
      this.showCamera = true
    },
    turnCameraOff () {
      this.camera = 'off'
      this.showCamera = false
    }
  }
}
</script>

<style scoped>
/* .validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
} */
</style>