'use client';

export default function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-5KGBJKBDQ5`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5KGBJKBDQ5');
          `,
        }}
      />
    </>
  );
}
