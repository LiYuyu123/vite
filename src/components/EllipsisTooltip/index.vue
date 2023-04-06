<template>
  <el-tooltip
    :disabled="show"
    :content="content"
    :effect="effect"
    :placement="placement"
  >
    <div class="word" ref="text">{{ content }}</div>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'dark'
    },
    placement: {
      type: String,
      default: 'top-start'
    },
  },
  data() {
    return {
      show: true,
      clientWidth: 0,
      scrollWidth: 0,
    }
  },
  watch: {
    clientWidth: {
      handler() {
        this.show = this.clientWidth === this.scrollWidth
      },
    },
  },
  mounted() {
    this.clientWidth = this.$refs?.text?.clientWidth
    this.scrollWidth = this.$refs?.text?.scrollWidth
    window.addEventListener('resize', () => {
      this.clientWidth = this.$refs?.text?.clientWidth
      this.scrollWidth = this.$refs?.text?.scrollWidth
    })
  },
  destroyed() {
    window.removeEventListener('resize', () => {
      this.clientWidth = this.$refs?.text?.clientWidth
      this.scrollWidth = this.$refs?.text?.scrollWidth
    })
  }
}
</script>

<style lang="scss" scoped>
.word {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  white-space: nowrap;
}
</style>
