<template lang='pug'>
#notFound.text-center
  h1 找不到
  b-btn(size='lg' variant='primary' @click='gohome') 回首頁
</template>

<script>
export default {
  methods: {
    gohome () {
      // 換頁 用.push 導向到別頁 .replace 去改目前頁面網址
      this.$router.push('/')
    }
  }
}
</script>
