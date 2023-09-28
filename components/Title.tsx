import type { PropType, VNode } from "vue";
import { defineComponent } from "vue";
import styles from "../styles/title.module.css";

const Title = defineComponent({
  props: {
    title: { type: Object as PropType<VNode>, required: true },
    caption: { type: Object as PropType<VNode>, required: false },
  },
  setup({ caption, title }) {
    return () => (
      <div class={styles["title-container"]}>
        <h1 class={styles.title}>{title}</h1>
        <p>{caption}</p>
      </div>
    );
  },
});

export default Title;
