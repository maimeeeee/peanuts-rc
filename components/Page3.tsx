import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'

const Page3 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>なぜ作ることになったのか２</h2>
        <div class={styles.body}>
          すでにあるWeb Components を使おうとしてみた。
          <br />
          しかし、スタイルの上書きが難しかった。
        </div>
      </div>
    )
  },
})

export default Page3
