---
theme: apple-basic
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
title: Peanuts WC
drawings:
  persist: false
transition: slide-left
fonts:
  sans: "Mulish"
  mono: "Fira Code"
layout: intro-image
image: "https://source.unsplash.com/collection/94734566/1920x1080"
---

<Page1 />

---

<Page2 />

---

<Page3 />

---

<Page4 />

---

<Page5 />

---

<Page6 />

---

<Page7 />

---

<Page8 />

```ts
<svelte:options
  customElement={{
    tag: 'prc-icon-button',
    accessors: true,
    props: {
      backgroundColor: {
        reflect: true,
        type: 'String',
        attribute: 'background-color',
      },
      color: { reflect: true, type: 'String', attribute: 'color' },
      fill: { reflect: true, type: 'Boolean', attribute: 'fill' },
      disabled: { reflect: true, type: 'Boolean', attribute: 'disabled' },
    },
  }}
/>
```

---

<Page9 />

```ts
<prc-icon-button
  background-color="var(--secondary-color)"
  color="white"
  fill={true}
  role="button"
  tabindex={0}
  onClick={() => {
    console.log('Click')
  }}
>
  star
</prc-icon-button>
```

---

<Page10 />

```ts
<prc-icon-button
  background-color="var(--secondary-color)"
  color="primary"
  fill={false}
  role="button"
  tabindex={0}
  on:keydown={() => {
    console.log('LOG: keydown');
  }}
  on:click={() => {
    console.log('LOG: click');
  }}
>
  star
</prc-icon-button>
```
---

<Page11 />

```ts
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'prc-icon-button': React.DetailedHTMLProps<
        {
          children: string;
          'background-color': string;
          color: string;
          fill?: boolean;
          role: 'button';
          tabindex: number;
          disabled?: boolean;
        } & React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
```
