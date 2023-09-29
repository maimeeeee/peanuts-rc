import { defineComponent } from 'vue'
import styles from '../styles/page.module.css'
import Title from './Title'

const Page1 = defineComponent({
  setup() {
    const title = (
      <>
        Svelte で作る
        <br /> Web Components
      </>
    )
    return () => (
      <>
        <Title {...{ title }}></Title>
        <div class={styles['sign']}>廣瀬 麻衣</div>
      </>
    )
  },
})

export default Page1
