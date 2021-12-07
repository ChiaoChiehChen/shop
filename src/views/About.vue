<template lang="pug">
#about
  b-container
    b-row
      b-col.text-center(col='12')
        p
          | 網頁設計及維護: XXOOO
          br
          | 最近更新日期: {{ date }}

</template>

<script>
export default {
  data () {
    return {
      date: new Date().toLocaleDateString()
    }
  }
}
</script>
