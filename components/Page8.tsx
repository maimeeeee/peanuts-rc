import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'

const Page8 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>
          Web Components を作るのに Svelte は有用なのか
        </h2>
        <div class={styles['body']}>
          Web Components を作るときは
          <a
            href="https://svelte.dev/docs/custom-elements-api"
            class={styles['caption-link']}
          >
            Custom elements API
          </a>
          を使う。
        </div>
      </div>
    )
  },
})

export default Page8
