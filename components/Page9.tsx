import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'

const Page9 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2 class={styles['page-title']}>
          Sveltekit や Next.js で使った時の使いやすさはどうか１
        </h2>
        <div>
          <div class={styles['body']}>
            Next.js（別途、型定義は必要。別ページで補足する）
          </div>
        </div>
      </div>
    )
  },
})

export default Page9
