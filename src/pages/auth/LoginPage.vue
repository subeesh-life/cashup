<template>
  <div>
    <q-header class="bg-white q-px-xl q-py-md">
      <q-toolbar>
        <img src="../auth/cashup.svg" />
        <q-toolbar-title><span class="text-black q-ml-xs text-bold text-h5 ellipsis">CashUp</span></q-toolbar-title>
        <q-tabs v-model="nav" class="text-black gt-sm">
          <q-tab name="home" label="Home" no-caps />
          <q-tab name="about-us" label="About US" no-caps />
          <q-tab name="partners" label="Partners" no-caps />
          <q-tab name="pricing" label="Pricing" no-caps />
          <q-tab name="customers" label="Customers" no-caps />
          <q-tab name="blog" label="Blog" no-caps disable />
          <q-tab name="resources" label="Resources" no-caps />
        </q-tabs>
        <q-space />
        <q-btn flat no-caps label="Log In" class="text-primary q-mr-sm gt-sm" />
        <q-btn no-caps color="primary" label="Get Started" class="gt-sm">
          <q-tooltip class="bg-positive text-caption">Let's Register Now</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>
    <div class="cy-login-container flex column flex-center q-mt-xl q-pt-xl">
      <div class="cy-head">
        <div class="cy-head-title text-h4 text-weight-medium q-mb-md">
          Log in to your account
        </div>

        <div class="cy-sub-text text-grey-7 text-center">
          Welcome back! Please enter your details
        </div>
      </div>
      <div class="cy-fields q-py-lg q-gutter-y-md column" style="width: 370px">
        <div>
          <label for="email" class="text-grey-9">Email</label>
          <q-input type="email" dense outlined id="email" v-model="email" placeholder="Enter your email" />
        </div>
        <div>
          <label for="password" class="text-grey-9">Password</label>
          <q-input dense outlined id="password" v-model="password" :type="isPwd ? 'password' : 'text'"
            placeholder="Enter your password">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </div>
        <div class="flex justify-between">
          <span><q-checkbox size="xs" v-model="rememberLogin" label="Remember for 30 Days" />
          </span>
          <span class="text-primary cursor-pointer">Forget Password</span>
        </div>
        <div>
          <q-btn no-caps color="primary" label="Sign In" class="fit"></q-btn>
        </div>
        <div class="text-grey-7 text-center q-pt-md">
          Don't have an account?
          <span class="text-primary cursor-pointer">Sign up</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const nav = ref('');
const email = ref('');
const password = ref('');
const isPwd = ref(true);
const rememberLogin = ref(null);
</script>
<style lang="scss" scoped></style>
