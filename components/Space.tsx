import { defineComponent } from 'vue'

const Space = defineComponent({
  props: {
    height: { type: Number, required: false, default: undefined },
    width: { type: Number, required: false, default: undefined },
  },
  setup({ height, width }) {
    return () => (
      <div style={`height: ${height ?? 1}px; width: ${width ?? 1}px;`}></div>
    )
  },
})

export default Space
