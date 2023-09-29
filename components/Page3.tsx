import { defineComponent } from 'vue'
import MuiImg from '../assets/img/mui.jpg'
import styles from '../styles/page.module.css'

const Page3 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles.underline}>はじめに</h2>
        <p>
          <h2>なぜ作ることになったのか</h2>
          <p>
            すでにあるWeb Components を使おうとしてみた。
            <br />
            しかし、
          </p>
          <img src={MuiImg} style={'width: 240px'} />
        </p>
      </div>
    )
  },
})

export default Page3
