<template>
  <q-page class="row justify-center items-center content-center">
    <div class="col-12">
      <!-- <q-btn
        @click="loginWithGoogle"
        label="sigin up with Google"
        type="submit"
        color="positive"
      >
      </q-btn> -->
      <!-- <a href="#" class="google-signup" @click.prevent="loginWithGoogle"> -->
      <a href="http://localhost:3030/oauth/google" class="google-signup">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
            Google
      </a>
      <q-space />
        <q-separator />
    </div>
    <div class="col-lg-8" v-if="!registrationComplete">
      <q-form @submit="onSubmit" class="q-gutter-md q-mt-sm">
        <div class="row justify-start items-start">
          <p class="q-ma-sm body-1">
            Sign up for an account below. You'll receive an email to verify your
            account.
          </p>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="$v.formData.firstname.$model"
              label="First Name"
              label-color="accent"
              hint="Given Name"
              lazy-rules
              dense
              class="q-ma-sm"
              :error="
                $v.formData.firstname.$invalid && $v.formData.firstname.$dirty
              "
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="fas fa-user" size="xs" />
              </template>
              <template v-slot:error>
                <div v-if="!$v.formData.firstname.required">
                  This field is required.
                </div>
                <div v-if="!$v.formData.firstname.minLength">
                  Must contain at least 2 characters.
                </div>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="$v.formData.lastname.$model"
              label="Family Name"
              label-color="accent"
              hint="Surname"
              lazy-rules
              dense
              class="q-ma-sm"
              :error="
                $v.formData.lastname.$invalid && $v.formData.lastname.$dirty
              "
              error-message="Must be at least 2 characters"
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="fas fa-user" size="xs" />
              </template>
              <template v-slot:error>
                <div v-if="!$v.formData.lastname.required">
                  This field is required.
                </div>
                <div v-if="!$v.formData.lastname.minLength">
                  Must contain at least 2 characters.
                </div>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="$v.formData.email.$model"
              label-color="accent"
              label="Email"
              type="email"
              hint="Verifiable Email Address"
              lazy-rules
              dense
              class="q-ma-sm"
              :error="$v.formData.email.$invalid && $v.formData.email.$dirty"
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="fas fa-envelope" size="xs" />
              </template>
              <template v-slot:error>
                <div v-if="!$v.formData.email.required">
                  This field is required.
                </div>
                <div v-if="!$v.formData.email.email">
                  Please provide a valid email address
                </div>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="$v.formData.confirmEmail.$model"
              label-color="accent"
              label="Confirm Email"
              type="text"
              lazy-rules
              hint="Confirm email address"
              dense
              class="q-ma-sm"
              :error="
                $v.formData.confirmEmail.$invalid &&
                  $v.formData.confirmEmail.$dirty
              "
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="fas fa-envelope" size="xs" />
              </template>
              <template v-slot:error>
                <div v-if="!$v.formData.confirmEmail.sameAsEmail">
                  Emails must match.
                </div>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="$v.formData.password.$model"
              label-color="accent"
              label="Password"
              type="password"
              lazy-rules
              dense
              class="q-ma-sm"
              hint="Create a password. 8 character minimum."
              :error="
                $v.formData.password.$invalid && $v.formData.password.$dirty
              "
              error-message=""
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="fas fa-lock" size="xs" />
              </template>
              <template v-slot:error>
                <div v-if="!$v.formData.password.required">
                  This field is required.
                </div>
                <div v-if="!$v.formData.password.minLength">
                  Password must be at least 8 characters.
                </div>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              type="password"
              label-color="accent"
              v-model="$v.formData.confirmPassword.$model"
              label="Confirm Password"
              lazy-rules
              dense
              hint="Confirm password"
              class="q-ma-sm"
              :error="
                $v.formData.confirmPassword.$invalid &&
                  $v.formData.confirmPassword.$dirty
              "
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="fas fa-lock" size="xs" />
              </template>
              <template v-slot:error>
                <div v-if="!$v.formData.confirmPassword.sameAsPassword">
                  Passwords must match.
                </div>
              </template>
            </q-input>
          </div>
        </div>       

        <div class="q-pa-sm text-right">
          <q-btn
            
            :loading="submitting"
            label="Register"
            type="submit"
            color="positive"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
        </div>
      </q-form>
    </div>
    <div class="col-lg-8 text-center" v-else>
      Registration complete! Please check your email to confirm your
      registration.
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { Notify, openURL } from "quasar";


export default {
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  validations: {
    formData: {
      firstname: {
        required,
        minLength: minLength(2)
      },
      lastname: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      confirmEmail: {
        sameAsEmail: sameAs(formData => {
          return formData.email;
        })
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        sameAsPassword: sameAs(formData => {
          return formData.password;
        })
      },
      did: {
        required
      }
    }
  },
  computed: {
    ...mapState({
      submitting: state => state.auth.showLoading,
      registrationComplete: state => state.auth.registrationComplete
    }),
    disableSubmit() {
      return this.$v.formData.$invalid;
    }
  },
  methods: {
    ...mapActions({
      getToken: "notifications/getToken",
    }),
    onSubmit: async function () { 
      var did_data =  await this.getDid();
      this.formData.did = JSON.parse(did_data);
      // console.log('await this.getPushToken()', await this.getPushToken());
      
      // this.formData.pushToken = await this.getPushToken();
      console.log('this.formData ', this.formData )
      
      this.$store.dispatch("account/registerUser", { formData: this.formData });
    },
    // DID create and test
    getDid: async function () { 
      const didData=JSON.stringify({
                "name": this.formData.email,
                "signatureType":"Ed25519Signature2018",
                "signatureRepresentation":1,
                "didKeyType":"Ed25519"
                });
      var did_test;
      await this.$subAxiosInstance.didCreate(didData)
        .then(function (response) {
          did_test =  JSON.stringify(response.data);
        })
        .catch(function (error) {
          console.log(error);
          did_test = JSON.stringify({"did1":'123456789'})
        });

      return did_test;
    },
    
    // firebase token create and test
    getPushToken: async function () {
      var pushToken;
      await this.getToken()
      .then(function (response) {
          
          pushToken = String(response);
          console.log('getToken--------?>', pushToken)
        })
        .catch(function (error) {
          console.log(error);
        });  
      
      console.log('pushToken >>>>>>>>>', pushToken)

      return pushToken;
      
    },
    loginWithGoogle () {
      this.$store.dispatch('auth/authenticate', {strategy: 'google'})
        // Just use the returned error instead of mapping it from the store.
        .catch(err => {
          // Convert the error to a plain object and add a message.
          let type = err.className;
          err = Object.assign({}, err);
          err.message =
            type === "not-authenticated"
              ? "Incorrect email or password."
              : "An error prevented login.";
          this.error = err;
          Notify.create({
            message: "Incorrect username/password combination.",
            color: "negative"
          });
        });
    },
  }
};
</script>
