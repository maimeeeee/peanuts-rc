import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'
import Space from './Space'

const Page11 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>課題</h2>

        <div class={styles['body']}>
          1. プロパティのサジェストをVS Codeで表示したい。
          <br />
          2. styleのカスタマイズ性をどのくらいにするか。
        </div>
        <Space height={24} />
        <div class={styles.caption}>
          Next.jsで使用するときは自前で型定義を追加しないとエラーになる。
        </div>
      </div>
    )
  },
})

export default Page11
