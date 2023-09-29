import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'
import Space from './Space'

const Page4 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>なぜWeb Componentsか１</h2>
        <div class={styles.body}>
          Reactで作られた共通コンポーネントはすでに作っている。
          <br /> ただし、これはReactのプロジェクトでしか使えない。
          <br />
          <Space height={24} />
          <div class={styles['caption']}>
            さらにいうと、1つのプロジェクトを対象にして作っているので
            <br />
            ビジネスロジックを含んでしまっているコンポーネントもある。
          </div>
        </div>
      </div>
    )
  },
})

export default Page4
