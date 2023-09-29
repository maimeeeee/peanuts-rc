import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'
import Space from './Space'

const Page5 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>なぜWeb Componentsか２</h2>
        <div class={styles.body}>
          今の開発でSvelteを使っているように、
          <br />
          今後の開発でNext.jsなどほかのフレームワークを使う可能性も考えられる。
          <div class={styles['arrow']} />
          フレームワークに左右されないUIライブラリーを作ろう。
          <Space height={24} />
          <div class={styles['caption']}>
            Web ComponentsはWebが標準で持っている機能であるため、
            <br />
            大抵のWeb Viewライブラリは動作する。
          </div>
        </div>
      </div>
    )
  },
})

export default Page5
