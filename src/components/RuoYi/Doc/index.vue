<template>
  <div>
    <svg-icon icon-class="question" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'Iotos-managerDoc',
  data() {
    return {
      url: 'http://www.iocoder.cn/Iotos-manager/build-debugger-environment/?iotos-manager'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
