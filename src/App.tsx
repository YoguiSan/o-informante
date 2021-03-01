import * as React from 'react';
import ArticleContainer from './components/ArticleContainer/index';

/*
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
*/

// const App: React.FC<JSX.IntrinsicElements> = () => (
const App = () => {
  const [url, setUrl] = React.useState<string>('');
  const [currentlyOpenUrl, setCurrentlyOpenUrl] = React.useState<string>();

  const checkInputClassName = (url: string) => {

  };

  return (
    <>
      <article 
        id="site-url-input-container"
        className={currentlyOpenUrl && currentlyOpenUrl.length  > 0 && 'open' || ''}
      >
        <h1 id="titulo-principal">O informante</h1>
        <h2>Você é livre. A informação também deve ser</h2>
        <input
          id="site-url-input"
          type="text"
          // className={() => checkInputClassName(url)}
          onChange={({ target: { value }}) => setUrl(value)}
        />
        <input
          id="site-url-input-submit"
          type="submit"
          onClick={() => setCurrentlyOpenUrl(url)}
          value="Abrir"
        />
      </article>
      {
        currentlyOpenUrl && currentlyOpenUrl.length  > 0 && (
          <ArticleContainer url={currentlyOpenUrl} />
        )
      }
    </>
  );
};

export default App;
