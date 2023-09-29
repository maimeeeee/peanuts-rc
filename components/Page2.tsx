import { defineComponent } from 'vue'
import MuiImg from '../assets/img/mui.jpg'
import styles from '../styles/page.module.css'

const Page2 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={`${styles['page-title']}`}>なぜ作ることになったのか１</h2>
        <div class={styles.body}>
          Svelteを使って開発をすることになったものの、
          <br />
          Svelteで作られたライブラリーは多くの場合ニーズを満たしてくれない。
          <img src={MuiImg} style={'width: 240px'} />
        </div>
      </div>
    )
  },
})

export default Page2
