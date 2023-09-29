import { defineComponent } from 'vue'
import SMuiImg from '../assets/img/smui.jpg'
import styles from '../styles/page.module.css'
import Space from './Space'

const Page2 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={`${styles['page-title']}`}>なぜ作ることになったのか１</h2>
        <div class={styles.body}>
          Svelteを使って開発をすることになったものの、
          <br />
          Svelteで作られたライブラリーは多くの場合ニーズを満たしてくれない。
        </div>
        <Space height={24} />
        <img src={SMuiImg} style={'width: 480px'} />
        <a href="https://sveltematerialui.com/" class={styles['caption-link']}>
          Svelte Material UI
        </a>
      </div>
    )
  },
})

export default Page2
