<template>
  <div>
    <prism language="bash" :plugins="['command-line']" , :code="code"></prism>
  </div>
</template>

<script>
import Prism from "vue-prismjs";
import "prismjs/themes/prism.css";

export default {
  components: {
    Prism,
  },
};
</script>
