export default function Head() {
  return (
    <>
      <title>Project name</title>
      <meta charSet="utf-8" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="Project name" />
      <meta name="veiwport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="manifest" href="/manifest.json" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
        // @ts-ignore
        precedence="default"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
        // @ts-ignore
        precedence="default"
      />
    </>
  );
}
