<template>

  <div id="app">
    <q-card-section class="text-h6 q-pb-none">
        <q-item>
          <q-item-section avatar class="">
            <q-icon color="blue" name="fas fa-key" size="44px" />
          </q-item-section>

          <q-item-section>
            <div class="text-h6">{{title}}</div>
          </q-item-section>
        </q-item>
    </q-card-section>
    <div v-if="step === 1">
      <div class="container">
        <vue-pincode
          v-model="pin" 
          :length="pindigits"
          ref="pincodeInput" 
          @pincode="checkPincode" />
      </div>
    </div>
    <div v-else-if="step === 2">
      <div class="container">
        <vue-pincode
          v-model="pinconfirm" 
          :length="pindigits"
          ref="pincodeConfirm" 
          @pincode="checkPincode" />
      </div>
    </div>
    <div v-else-if="step === 3">
      <div class="container">
        <vue-pincode
          v-model="oldpin"
          :length="pindigits" 
          ref="oldpin" 
          @pincode="checkPincode" 
          />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VuePincode from "components/pin/VuePincode";
import LocalStorage from "quasar";
import { mapState, mapGetters } from "vuex";

export default {
  name: "PinCheck",
  components: {
    VuePincode
  },
  props: {
    method: {
      default: "create",
      type: String,
    },
    subModule: {
      default: true,
      type: Boolean,
    },
    onBack: {
      type: Function,
    },
  },
  data() {
    return {
      oldpin: "",
      pin: "",
      pinconfirm: "",
      errorcode: 0,
      attempts: 3,
      step: 1,
      pinfail: false,
      title:"핀번호를 입력해 주세요",
      checkpin:''  
    };
  },
  watch: {
    pincodeInput() {
      if (this.pin.length === this.pindigits) {
        this.step = 2;
      }
    },
    pinconfirm() {
      if (this.pinconfirm.length === this.pindigits) {
        this.pinInputComplete();
      }
    },
    oldpin() {
      if (this.oldpin.length === this.pindigits) {
        this.oldpinInputComplete();
      }
    },
  },
  computed: {
    ...mapGetters(["pincode/getPinCode"]),
    ...mapState({
      pindigits: (state) => state.pincode.pin.pindigits,
    }),
    statusCaption() {
      if (this.errorcode === 1) return "PIN Code is not correct";
      else if (this.errorcode === 2) return "PIN Code doesn't match";
      return "";
    },
    isPincodeEmpty() {
      return !this.getPinCode;
    },
  },
  mounted() {
    this.checkpin = localStorage.getItem("pass-pincode" )
    console.log(this.checkpin)

    if (this.checkpin.length > 0) {
      this.step = 3
    }
    // if (this.method === "create") {
    //   if (this.isPincodeEmpty) this.step = 1;
    //   else this.$emit("success");
    // } else if (this.method === "update") {
    //   if (this.isPincodeEmpty) this.step = 1;
    //   else this.step = 3;
    // }
  },
  methods: {
    checkPincode(pincode) {
      setTimeout(() => {
        if (this.step == 1) {
          this.pin = pincode
          this.$refs.pincodeInput.triggerSuccess();
          this.step = 2;
          this.title = '핀번호를 한번더 입력해 주세요'
        } else if (this.step == 2) {
          this.pinconfirm = pincode

          if (this.pin == pincode ) {
            this.$refs.pincodeConfirm.triggerSuccess();
            this.pinInputComplete();
            this.$router.push("/mobile");
          } else {
            this.title = '정확하게 입력해 주세요.'  
            this.$refs.pincodeConfirm.triggerMiss();          
          }
          
        } else {
          if (this.checkpin == pincode) {
            this.$refs.oldpin.triggerSuccess();
            this.$router.push("/mobile");
          } else {
            this.title = '정확하게 입력해 주세요.'  
            this.$refs.oldpin.triggerMiss();
          }
          
        }
        // if (pincode === "123456") {
        //   console.log('state.pincode.pin', this.pindigits)
        //   // this.$refs.pincodeInput.triggerSuccess();
        // } else {
        //   console.log('state.pincode.pin',   this.pindigits)
        //   // this.$refs.pincodeInput.triggerMiss();
        // }
      }, 700);
    },
    oldpinInputComplete() {
      if (this.oldpin === this.getPinCode.pin) {
        this.step = 2;
        this.errorcode = 0;
      } else {
        this.errorcode = 1;
        this.pinfail = true;
        setTimeout(() => {
          this.pinfail = false;
          this.oldpin = "";
        }, 800);
      }
    },
    pinInputComplete() {
      if (this.pinconfirm === this.pin) {
        this.errorcode = 0;
        this.$store.dispatch("pincode/setPincode", this.pinconfirm);
        setTimeout(() => {
          if (!this.subModule) {
            this.$router.push("/pincode/security");
          } else {
            this.$emit("success");
          }
        }, 300);
      } else {
        this.errorcode = 2;
        this.pinfail = true;
        setTimeout(() => {
          this.pinfail = false;
          this.pinconfirm = "";
          this.attempts = Math.max(this.attempts - 1, 0);
        }, 800);
      }
    },
    // async login(pincode) {
    //   try {
    //     const { data } = await axios.post(`/login`, { pincode })
    //     console.log('sucess', pincode)
    //     this.$refs.pincodeInput.triggerSuccess();
    //     return { success: true, status: data.status }
    //   } catch (e) {
    //     this.$refs.pincodeInput.triggerMiss();
    //     console.log('false', pincode)
    //     return { success: false, status: e.response.data.status }
    //   }
    // },
  }
};
</script>

