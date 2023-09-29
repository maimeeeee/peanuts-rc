import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'

const Page10 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>
          Sveltekit や Next.js で使った時の使いやすさはどうか２
        </h2>
        <div>
          <div class={styles['body']}>Svelte Kit</div>
        </div>
      </div>
    )
  },
})

export default Page10
