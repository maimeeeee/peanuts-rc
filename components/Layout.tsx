import { defineComponent } from "vue";
import type { VNode, PropType } from "vue";
import styles from "../styles/layout.module.css";

const Layout = defineComponent({
  props: {
    title: { type: Object as PropType<VNode>, required: true },
    caption: { type: Object as PropType<VNode>, required: false },
  },
  setup({ caption, title }) {
    return () => (
      <div class={styles.main}>
        <span class={styles.title}>{title}</span>
        <p class={styles.caption}>{caption}</p>
      </div>
    );
  },
});

export default Layout;
