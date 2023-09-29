import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'
import Space from './Space'

const Page6 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>UIライブラリーの分類</h2>
        <div class={styles.body}>
          世の中にあるUIライブラリーの分類として、
          <br />
          styleをつけている「見た目」を提供するものと
          <br />
          styleがあたっていない（headless ui）「振る舞い」を提供するものがある。
        </div>
        <Space height={24} />
        <div class={styles['body-strong']}>
          今回作っているのは「見た目」を提供する方
        </div>
      </div>
    )
  },
})

export default Page6
