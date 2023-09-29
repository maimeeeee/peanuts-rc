import { defineComponent } from 'vue'
import MWCImg from '../assets/img/mui.jpg'
import styles from '../styles/page.module.css'
import Space from './Space'

const Page3 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>なぜ作ることになったのか２</h2>
        <div class={styles.body}>
          できることならアプリケーションの開発に集中したいので、
          <br />
          すでにあるWeb Components を使おうとしてみた。
          <br />
          しかし、スタイルの上書きが難しかった。
        </div>
        <Space height={24} />
        <img src={MWCImg} style={'width: 480px'} />
        <a href="https://m3.material.io/" class={styles['caption-link']}>
          Material Web
        </a>
      </div>
    )
  },
})

export default Page3
