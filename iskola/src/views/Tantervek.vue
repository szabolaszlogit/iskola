<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const items = ref([
  {
    label: "Biológia",
    items: [
      {
        label: "Biológia 8.",
        url: "/downloads/tantervek/Biológia 8.osztály.pdf",
      },
    ],
  },
  {
    label: "Digitális kultúra",
    items: [
      {
        label: "DIgitális kultúra 3-4",
        url: "/downloads/tantervek/Digitalis kultúra 3-4..pdf",
      },
      {
        label: "DIgitális kultúra 5",
        url: "/downloads/tantervek/Digitális-kultúra-5.-évfolyam.pdf",
      },
      {
        label: "DIgitális kultúra 6",
        url: "/downloads/tantervek/Digitális-kultúra-6.-évfolyam.pdf",
      },
    ],
  },
  {
    label: "Ének-zene",
    items: [
      {
        label: "Ének-zene 1-2",
        url: "/downloads/tantervek/Ének-zene 1-2..pdf",
      },
      {
        label: "Ének-zene 3-4",
        url: "/downloads/tantervek/Ének-zene 3-4..pdf",
      },
      {
        label: "Ének-zene 5-6",
        url: "/downloads/tantervek/Ének-zene 5-6..pdf",
      },
      {
        label: "Ének-zene 7-8",
        url: "/downloads/tantervek/Ének-zene 7-8..pdf",
      },
    ],
  },
  {
    label: "Etika",
    items: [
      {
        label: "Etika 1-2",
        url: "/downloads/tantervek/Etika 1-2..pdf",
      },
      {
        label: "Etika 3-4",
        url: "/downloads/tantervek/Etika 3-4..pdf",
      },
      {
        label: "Etika 5-8",
        url: "/downloads/tantervek/Etika 5-8..pdf",
      },
    ],
  },
  {
    label: "Fizika",
    items: [
      {
        label: "Fizika 7",
        url: "/downloads/tantervek/Fizika 7..pdf",
      },
      {
        label: "Fizika 8",
        url: "/downloads/tantervek/Fizika 8..pdf",
      },
    ],
  },
  {
    label: "Irodalom",
    items: [
      {
        label: "Irodalom 5",
        url: "/downloads/tantervek/Irodalom 5..pdf",
      },
      {
        label: "Irodalom 6",
        url: "/downloads/tantervek/Irodalom 6..pdf",
      },
      {
        label: "Irodalom 7-8",
        url: "/downloads/tantervek/Irodalom 7-8..pdf",
      },
    ],
  },
  {
    label: "Környezetismeret",
    items: [
      {
        label: "Környezetismeret 3-4",
        url: "/downloads/tantervek/Környezetismeret 3-4..pdf",
      },
    ],
  },
  {
    label: "Magyar nyelv és irodalom",
    items: [
      {
        label: "Magyar nyelv és irodalom 1-2",
        url: "/downloads/tantervek/Magyar nyelv és irodalom 1-2..pdf",
      },
      {
        label: "Magyar nyelv és irodalom 3-4",
        url: "/downloads/tantervek/Magyar nyelv és irodalom 3-4..pdf",
      },
    ],
  },
  {
    label: "Magyar nyelv",
    items: [
      {
        label: "Magyar nyelv 5-6",
        url: "/downloads/tantervek/Magyar-nyelv 5-6..pdf",
      },
      {
        label: "Magyar nyelv 7-8",
        url: "/downloads/tantervek/Magyar-nyelv  7-8..pdf",
      },
    ],
  },
  {
    label: "Matematika",
    items: [
      {
        label: "Matematika 1-2",
        url: "/downloads/tantervek/Matematika 1-2..pdf",
      },
      {
        label: "Matematika 3-4",
        url: "/downloads/tantervek/Matematika 3-4..pdf",
      },
      {
        label: "Matematika 5-6",
        url: "/downloads/tantervek/Matematika 5-6..pdf",
      },
      {
        label: "Matematika 7-8",
        url: "/downloads/tantervek/Matematika 7-8..pdf",
      },
    ],
  },
  {
    label: "Német nemzetiségi nyelv",
    items: [
      {
        label: "Német nemzetiségi nyelv 1-8",
        url: "/downloads/tantervek/Német nemzetiségi nyelv 1-8..pdf",
      },
    ],
  },
  {
    label: "Technika és tervezés",
    items: [
      {
        label: "Technika és tervezés 1-2",
        url: "/downloads/tantervek/Technika és tervezés 1-2..pdf",
      },
      {
        label: "Technika és tervezés 3-4",
        url: "/downloads/tantervek/Technika és tervezés 3-4..pdf",
      },
            {
        label: "Technika és tervezés 5",
        url: "/downloads/tantervek/Technika és tervezés 5..pdf",
      },
      {
        label: "Technika és tervezés 6",
        url: "/downloads/tantervek/Technika és tervezés 6..pdf",
      },
      {
        label: "Technika és tervezés 7",
        url: "/downloads/tantervek/Technika és tervezés 7..pdf",
      },
    ],
  },
    {
    label: "Természetismeret",
    items: [
      {
        label: "Természetismeret 5",
        url: "/downloads/tantervek/Természetismeret 5..pdf",
      },
            {
        label: "Természetismeret 6",
        url: "/downloads/tantervek/Természetismeret 6..pdf",
      },
    ],
  },
    {
    label: "Testnevelés",
    items: [
      {
        label: "Testnevelés 1-2",
        url: "/downloads/tantervek/Testnevelés 1-2..pdf",
      },
      {
        label: "Testnevelés 5",
        url: "/downloads/tantervek/Testnevelés 5..pdf",
      },
            {
        label: "Testnevelés 6",
        url: "/downloads/tantervek/Testnevelés 6..pdf",
      },
      {
        label: "Testnevelés 7",
        url: "/downloads/tantervek/Testnevelés 7..pdf",
      },
      {
        label: "Testnevelés 8",
        url: "/downloads/tantervek/Testnevelés 8..pdf",
      },
    ],
  },
    {
    label: "Történelem",
    items: [
      {
        label: "Történelem 5-8",
        url: "/downloads/tantervek/Történelem 5-8..pdf",
      },
    ],
  },
]);
</script>

<template>
  <div  class="flex flex-column align-items-center">
    <PanelMenu class="w-full md:w-8" :model="items"> </PanelMenu>
  </div>
</template>

<style scoped></style>
