<template>

  <q-page>
    <q-header class="bg-white">
      <div class="row flex items-center q-pa-lg">
        <div class="col-xs-6 col-md-2 flex items-center">
          <img src="../auth/assets/cashup.svg" />
          <span class="text-black q-ml-sm text-bold text-h5 ellipsis">CashUp</span>
        </div>
        <div class="col-md-8 gt-sm">
          <q-tabs v-model="nav" class="text-black gt-sm">
            <q-tab name="home" label="Home" no-caps />
            <q-tab name="about-us" label="About US" no-caps />
            <q-tab name="partners" label="Partners" no-caps />
            <q-tab name="pricing" label="Pricing" no-caps />
            <q-tab name="customers" label="Customers" no-caps />
            <q-tab name="blog" label="Blog" no-caps disable />
            <q-tab name="resources" label="Resources" no-caps />
          </q-tabs>
        </div>
        <div class="col-xs-6 text-right lt-md">
          <q-btn flat dense round class="text-black" icon="menu" aria-label="Menu" @click="toggleRightDrawer" />
          <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" bordered>
            <q-scroll-area class="fit text-black">
              <q-list padding class="menu-list">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="home" />
                  </q-item-section>

                  <q-item-section side>
                    Home
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="corporate_fare" />
                  </q-item-section>

                  <q-item-section side>
                    About US
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="handshake" />
                  </q-item-section>

                  <q-item-section side>
                    Partners
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="request_quote" />
                  </q-item-section>

                  <q-item-section side>
                    Pricing
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="groups" />
                  </q-item-section>

                  <q-item-section side>
                    Customers
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="rss_feed" />
                  </q-item-section>

                  <q-item-section side>
                    Blog
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon class="text-grey" name="description" />
                  </q-item-section>

                  <q-item-section side>
                    Resources
                  </q-item-section>
                </q-item>

              </q-list>
            </q-scroll-area>
          </q-drawer>
        </div>
        <div class="col-md-2 gt-sm flex justify-end">
          <q-btn flat no-caps label="Log In" class="text-primary q-mr-sm gt-sm" />
          <q-btn no-caps color="primary" label="Get Started" class="gt-sm">
            <q-tooltip class="bg-positive text-caption">Let's Register Now</q-tooltip>
          </q-btn>
        </div>
      </div>
    </q-header>
    <div class="column login q-pt-xl ">
      <div class="col-sm-12 col-md-12 q-pt-md">
        <!-- !For Desktop -->
        <div class="text-h4 text-weight-medium q-mb-md text-center gt-sm">
          Log in to your account
        </div>
        <!-- !For Mobile -->
        <div class="text-h4 text-weight-medium q-mb-md text-left lt-md q-px-lg">
          Log in
        </div>
        <!-- !For Desktop -->
        <div class="text-grey-7 text-center gt-sm">
          Welcome back! Please enter your details
        </div>
        <!-- !For Mobile -->
        <div class="text-grey-7 text-left lt-md q-px-lg">
          Welcome back! Please enter your details
        </div>
      </div>

      <div class="form q-pa-lg q-gutter-y-sm">
        <div class="row flex justify-center">
          <div class="col-xs-12 col-md-4">
            <label for="email" class="text-grey-9">Email</label>
            <q-input dense autofocus outlined class="q-mt-xs" type="email" id="email" v-model="email"
              placeholder="Enter your email" :rules="[val => !!val || 'Email is required']" />
          </div>
        </div>
        <div class="row flex justify-center">
          <div class="col-xs-12 col-md-4">
            <label for="password" class="text-grey-9">Password</label>
            <q-input dense outlined class="q-mt-xs" id="password" v-model="password" :type="isPwd ? 'password' : 'text'"
              placeholder="Enter your password" :rules="[val => !!val || 'Password is required']">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="row flex justify-center">
          <div class="col-xs-12 col-md-4">
            <div class="flex justify-between items-center">
              <span><q-checkbox size="xs" v-model="rememberLogin" label="Remember for 30 Days" />
              </span>
              <span class="text-primary cursor-pointer">Forget Password</span>
            </div>
          </div>
        </div>
        <div class="row flex justify-center">
          <div class="col-xs-12 col-md-4">
            <q-btn :disabled="email.length == 0 || password.length == 0" no-caps color="primary" label="Sign In"
              class="fit"></q-btn>
          </div>
        </div>
        <div class="row flex justify-center">
          <div class="col-xs-12 col-md-4">
            <div class="text-grey-7 text-center q-pt-md">
              Don't have an account?
              <span class="text-primary cursor-pointer">Sign up</span>

            </div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const nav = ref('');
const email = ref('');
const password = ref('');
const isPwd = ref(true);
const rememberLogin = ref(null);
const rightDrawerOpen = ref(false)
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

</script>
