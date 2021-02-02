<template>
  <q-parallax src="../assets/img/dark-star-background.jpg">
    <q-card flat class="pa-2 transparent" dark>
      <q-row align="start" class="mt-12">
        <q-col md="2"></q-col>
        <q-col cols="12" md="10">
          <q-row>
            <q-col cols="12">
              <p class="mt-6 display-1 font-weight-bold">
                Landing Page
              </p>
              <p class="headline">
                An app does not get more
                <span class="amber--text">real</span>
                than this.
              </p>
            </q-col>

            <q-col cols="12" md="6">
              <q-btn x-large color="primary" class="mr-3" to="/register">
                Sign up
              </q-btn>
              <q-btn x-large outlined dark to="/#features">Details</q-btn>
              <span>
                <br />

                <q-btn dark dense to="/login" text class="ml-auto">
                  or
                  <span
                    class="pl-3"
                    style="text-decoration:underline;text-underline-position: under"
                  >
                    login
                  </span>
                </q-btn>
              </span>
            </q-col>
          </q-row>
        </q-col>
      </q-row>
    </q-card>
  </q-parallax>
</template>
