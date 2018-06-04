<script>
import {get} from './util'
export default {
  async created () {
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    const res = await get('/aaa/2.txt')
    console.log(123, res)
  }
}
</script>

<style>

</style>
