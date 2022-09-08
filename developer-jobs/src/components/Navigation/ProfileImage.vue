<template>
  <img :src="imageUrl" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageUrl: "guts-berserk-1600x1200.png",
    };
  },
};
</script>
