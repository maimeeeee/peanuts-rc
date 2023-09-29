import { defineComponent } from 'vue'
import MuiImg from '../assets/img/mui.jpg'
import styles from '../styles/page.module.css'

const Page2 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles.underline}>はじめに</h2>
        <p>
          <h2>なぜ作ることになったのか</h2>
          <p>
            Svelteを使って開発をすることになったものの、
            <br />
            Svelteで作られたライブラリーは多くの場合ニーズを満たしてくれない。
          </p>
          <img src={MuiImg} style={'width: 240px'} />
        </p>
      </div>
    )
  },
})

export default Page2
