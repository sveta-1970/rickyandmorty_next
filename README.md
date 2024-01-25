Проєкт відкривається з терміналу за допомогою команди
npm run dev

Проєкт задеплоєний на платформі Vercel
https://rickyandmorty-next-jsua.vercel.app

Я інсталювла Cypress
npm install cypress --save-dev

Далі скачала десктопну версію Cypress, щоб можна було бачити що відбувається в проєкті.

Відкриваю Cypress
npx cypress open

Один раз запустилося вікно, де потрібно було вибрати тип тесту і початкові налаштування підгрузилися в проєкт. Коли я вдруге відкривала Cypress, видавало помилку, що нібито я вперше користуюсь і була помилка Cypress verification timed out

Я намагалася запустити npx cypress run --spec cypress/e2e/spec.cy.js
Але також програма довго грузилася і видавало помилку.

Я дописувала в package.json скрипти "cypress:open": "cypress open", "cy:run": " cypress run", але це також не допомогло.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
