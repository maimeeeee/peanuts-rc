import { defineComponent } from 'vue';
import Title from './Title';

const Page1 = defineComponent({
  setup() {
    const title = (
      <>
        Svelte で作る Web Components
      </>
    );
    return () => (
      <Title
        {...{ title }}
      >
      </Title>
    );
  },
});

export default Page1;
