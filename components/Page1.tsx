import { defineComponent } from "vue";
import styles from "../styles/page.module.css";
import Title from "./Title";

const Page1 = defineComponent({
  setup() {
    const title = (
      <>
        大胆で危うい技術。 <br />
        地球を人為的に冷やす
        <br /> 「太陽放射改変」って何だ
        <br /> 【ゲスト：杉山昌広さん】
      </>
    );
    return () => (
      <Title
        {...{ title }}
        caption={
          <a
            class={styles["caption-link"]}
            href="https://www.audacy.com/podcast/green-impact-%E5%9C%B0%E7%90%83%E3%82%92%E6%95%91%E3%81%86%E3%83%A4%E3%83%90%E3%81%84%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9-9a39b/episodes/38-%E5%A4%A7%E8%83%86%E3%81%A7%E5%8D%B1%E3%81%86%E3%81%84%E6%8A%80%E8%A1%93%E5%9C%B0%E7%90%83%E3%82%92%E4%BA%BA%E7%82%BA%E7%9A%84%E3%81%AB%E5%86%B7%E3%82%84%E3%81%99%E5%A4%AA%E9%99%BD%E6%94%BE%E5%B0%84%E6%94%B9%E5%A4%89%E3%81%A3%E3%81%A6%E4%BD%95%E3%81%A0%E3%82%B2%E3%82%B9%E3%83%88%E6%9D%89%E5%B1%B1%E6%98%8C%E5%BA%83%E3%81%95%E3%82%93-7a256"
          >
            GREEN IMPACT 〜地球を救う、ヤバいビジネス〜
          </a>
        }
      ></Title>
    );
  },
});

export default Page1;
