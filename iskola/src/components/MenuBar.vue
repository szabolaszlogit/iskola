<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const items = ref([
  {
    label: "Adatok, kapcsolat",
    to: "adatok",
  },
  {
    label: "Névadónk",
    to: "nevadonk",
  },
  {
    label: "Maróthy-díj",
    to: "dij",
  },
  {
    label: "Alapítvány",
    to: "alapitvany",
  },
  {
    label: "Közzétételi lista",
    to: "kozzeteteli",
  },
  {
    label: "Tantervek",
    to: "tantervek",
  },
]);
</script>

<template>
  <Menubar :model="items" class="mb-3">
    <template #start>
      <a href="/">
        <img alt="logo" src="@/assets/marothy_janos_arckep.jpg" height="40" class="mr-2"
      /></a>
    </template>
    <template #end>
      <a
        class="p-button no-underline mr-2"
        href="https://www.facebook.com/MarothyJanosAltIsk/"
        target="_blank"
        >Facebook</a
      >
      <a
        class="p-button no-underline"
        href="https://www.youtube.com/user/Rozsaly"
        target="_blank"
        >Youtube</a
      >
    </template>
  </Menubar>
</template>

<style scoped></style>
