import { defineComponent } from "vue";

const Page2 = defineComponent({
  setup() {
    return () => (
      <div>
        <h2>引用元</h2>
        <p>
          GREEN IMPACT 〜地球を救う、ヤバいビジネス〜
          <br />
          NewsPicks地球支局 × Chronicle
        </p>
        <h2>ゲスト</h2>
        <p>東京大学未来ビジョン研究センター杉山昌広准教授</p>
      </div>
    );
  },
});

export default Page2;
