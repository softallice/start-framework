
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          v-if="$store.state.auth.user"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" >
          <q-icon name="code" color="red" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            FrameWork
          </q-toolbar-title>
        </q-btn>

        <!-- <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
          <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
        </div> -->

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$store.state.auth.user" round dense flat color="grey-8" icon="message" >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn v-if="$store.state.auth.user" round dense flat color="grey-8" icon="notifications" @click="showNotif">
            <q-badge color="red" text-color="white" floating>
              {{ $store.state.notifications.count.total }}
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

          <q-btn
            v-if="!$store.state.auth.user"
            color="grey-8"
            flat
            to="/register"
            stretch
            class="text-bold"
            ><q-icon
              name="fas fa-user-plus"
              class="q-mr-sm text-grey-8"
              size="xs"
            ></q-icon
            >Register
            <q-tooltip>회원 가입을 하세요</q-tooltip>
          </q-btn>
          <q-btn
            v-if="!$store.state.auth.user"
            color="grey-8"
            to="/login"
            flat
            stretch
            class="text-bold"
          >
            <q-icon
              name="fas fa-sign-in-alt"
              class="q-mr-sm text-grey-8"
              size="xs"
            ></q-icon
            >Login
            <q-tooltip>로그인을 하세요</q-tooltip>
            </q-btn
          >
          <q-btn
            v-if="$store.state.auth.user"
            color="grey-8"
            to="/account"
            flat
            stretch
            class="text-bold"
            ><q-icon
              name="fas fa-user-circle"
              class="q-mr-sm text-grey-8"
              size="xs"
            ></q-icon
            >Account
            <q-tooltip>회원정보를 수정 하세요</q-tooltip>
            </q-btn
          >
          <q-btn v-if="isAdmin" to="/admin" flat stretch class="text-bold" color="grey-8"
            ><q-icon
              name="fas fa-chart-line"
              class="q-mr-sm text-grey-8"
              size="xs"
            ></q-icon
            >Admin Dashboard
            <q-tooltip>사용자 관리 화면입니다.</q-tooltip>
            </q-btn
          >

          <!-- <q-btn
            v-if="$store.state.auth.user"
            round 
            flat
          >
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>name</q-tooltip>
            </q-btn
          > -->

          <q-btn
            v-if="$store.state.auth.user"
            color="grey-8"
            @click="logout"
            flat
            stretch
            class="text-bold"
          >
            <q-icon
              name="fas fa-sign-out-alt"
              class="q-mr-sm text-grey-8"
              size="xs"
            ></q-icon
            >Logout
            <q-tooltip>로그아웃</q-tooltip>
            </q-btn
          >
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$store.state.auth.user"
      v-model="leftDrawerOpen"
      overlay
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
      <q-list>
        <!-- Chat -->
        <q-item to="/Chat" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="question_answer"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Chat</q-item-label>
          </q-item-section>
        </q-item>
        <!-- vaccination -->
        <q-item to="/Vaccination" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="hvac"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Vaccination</q-item-label>
          </q-item-section>
        </q-item>
        <!-- VC & Vault -->
        <q-item to="/Credential" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="assignment_ind"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Credential</q-item-label>
          </q-item-section>
        </q-item>
        <!-- Qrcode Generator -->
        <q-item to="/Generator" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="qr_code"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>QR Generator</q-item-label>
          </q-item-section>
        </q-item>
        <!-- Qrcode Reader -->
        <q-item to="/QrReader" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="qr_code_scanner"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Qrcode Scanner</q-item-label>
          </q-item-section>
        </q-item>
        <!-- Dashboard -->

        <q-item to="/Dashboard" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Dashboard2" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>CRM Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item
          icon="pages"
          label="Pages"
        >
          <q-list class="q-pl-lg">
            <q-item to="/Login-1" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="email"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Login-1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Lock" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="lock"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Lock Screen</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Lock-2" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="lock"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Lock Screen - 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Pricing" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="list"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Pricing</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header class="text-weight-bolder text-white">Generic</q-item-label>
            <q-item to="/Profile" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="person"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>User Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Maintenance" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="settings"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Maintenance</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item
          icon="map"
          label="Maps"
        >
          <q-list class="q-pl-lg">
            <q-item to="/Map" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="map"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Map</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/MapMarker" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="location_on"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Map Marker</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/StreetView" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="streetview"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Street View</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item to="/Mail" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="email"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mail</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TreeTable" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="list"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>TreeTable</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Charts" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="insert_chart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Charts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Cards" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="card_giftcard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Cards</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Tables" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="table_chart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Tables</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Contact" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="person"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Checkout" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="check_circle_outline"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Checkout</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Calendar" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="date_range"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Taskboard" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="done"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Taskboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Pagination" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="date_range"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Pagination</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Ecommerce" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="shopping_cart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Product Catalogues</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item
          icon="menu_open"
          label="Menu Levels"
        >
          <q-item class="q-ml-xl" active-class="q-item-no-link-highlighting">
            <q-item-section>
              <q-item-label>Level 1</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item
            :header-inset-level="0.85"
            label="Level 2"
          >
            <q-item class="q-ml-xl" style="margin-left: 55px  !important;" active-class="q-item-no-link-highlighting">
              <q-item-section>
                <q-item-label>Level 2.1</q-item-label>
              </q-item-section>
            </q-item>
            <q-expansion-item
              :header-inset-level="1"
              label="Level 2.2"
            >
              <q-item style="margin-left: 65px  !important;" active-class="q-item-no-link-highlighting">
                <q-item-section>
                  <q-item-label>Level 2.2.1</q-item-label>
                </q-item-section>
              </q-item>
              <q-item style="margin-left: 65px  !important;" active-class="q-item-no-link-highlighting">
                <q-item-section>
                  <q-item-label>Level 2.2.2</q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from "components/EssentialLink.vue";
// import Messages from '../layouts/Messages'

export default {
  name: "MainLayout",
  // components: { 
  //     Messages,
  //     EssentialLink},
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    isAdmin() {
      let user = this.$store.state.auth.user;
      if (user) {
        if (user.permissions) {
          return user.permissions.includes("admin");
        }
      }
      return false;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      window.localStorage.removeItem('pushToken');
    },
    showNotif () {
      this.$q.notify({
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.',
        color: 'primary',
        multiLine: true,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } }
        ]
      })
    }
  }
};
</script>
