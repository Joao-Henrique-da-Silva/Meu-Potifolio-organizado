import { Helmet } from 'react-helmet-async';

export function SEO() {
  return (
    <Helmet>
      <title>João Henrique | Portfólio</title>
      <meta name="description" content="Desenvolvedor Full Stack com experiência em React, Node.js e UI/UX." />
      <meta property="og:title" content="João Henrique | Portfólio" />
      <meta property="og:description" content="Desenvolvedor Full Stack com experiência em React, Node.js e UI/UX." />
      <meta property="og:image" content="https://joao-henrique-da-silva.github.io/Meu-Potifolio-organizado/og-image.jpg?v=2" />
      <meta property="og:url" content="https://joao-henrique-da-silva.github.io/Meu-Potifolio-organizado/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://joao-henrique-da-silva.github.io/Meu-Potifolio-organizado/og-image.jpg" />
    </Helmet>
  );
}