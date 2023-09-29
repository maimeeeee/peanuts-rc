import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'

const Page6 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>
          Web Components を作るのにどのフレームワークを使うのか
        </h2>
        <div class={styles.body}>
          候補に上がっていたのは、Svelte・Lit・React の3つ。
        </div>
        <div class={styles.body}>
          Web Components を作るのに一番よく使われているのは、
          <a href="https://lit.dev/" class={styles['caption-link']}>
            Lit
          </a>
        </div>
        <div class={styles.body}>
          学習コストの面から、今進んでいる開発でも使っているSvelteを採用した。
        </div>
      </div>
    )
  },
})

export default Page6
