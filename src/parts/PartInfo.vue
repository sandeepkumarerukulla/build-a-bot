<template>
    <div>
        <h1> Title: {{part.title}} </h1>
        <div> Description : {{part.description}} </div>
    </div>
</template>

<script>
export default {
  name: 'PartInfo',
  props: {
    part: {
      type: Object,
      required: true,
    },
  },
};

</script>
