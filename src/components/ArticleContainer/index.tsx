import * as React from 'react';
import { identifySite } from '../../utils/url';

import './index.less';

type ArticleContainerProps = {
  url: string;
}

const ArticleContainer = ({ url }: ArticleContainerProps) => {
  const [error, setError] = React.useState<any>();
  const [showInstructions, setShowInstructions] = React.useState<boolean>(false);

  const defaultArticle = <object
    id="open-article-content"
    type="text/html"
    data={url}
  />
  
  const site: any = identifySite(url);

  const fetchedHTML: any = fetch(url, /* { mode: 'no-cors' } */)
    .then((response) => response.text())
    .then((html) => html)
    .catch((error) => {
      setError(`Erro ao abrir site: ${error}`);
      setShowInstructions(true);
    });

  return(
    <article id="open-article-container">
      <button
        type="button"
        id="instructions-container-toggler"
        onClick={() => setShowInstructions(!showInstructions)}
      >
        {showInstructions && 'Ocultar instruções' || (error ? 'Exibir instruções' : 'Problemas? Clique aqui')}
      </button>
      {showInstructions && (
        <section id="instructions-container">
          <h3 className="info">Caso ocorra algum erro ou não seja possível abrir o site, siga as instruções abaixo para ocultar o paywall <b className="warning">(obs.: passos possíveis apenas em computador)</b>:</h3>
          <ol className="steps">
            <li>Abra as ferramentas de desenvolvedor (F12 ou clique com o botão direito na página e selecione Inspecionar)</li>
            <li>Na aba <b>Elements</b>, procure os seguintes elementos (ou se não encontrar, procure algum elemento que possua um atributo <i>id</i> ou <i>class</i> com o texto correspondente ou similar) e em <b>Styles</b>, adicione ou substitua os valores existentes dentro de <i>element.style</i> pelos seguintes</li>:
            {
              Object.keys(site.instructions).map((key) => (
                <ul id="instructions-list">
                  <li><b className="instructions-list-site-name">{key}:</b> {site.instructions[key]}</li>
                </ul>
              ))
            }
          </ol>
        </section>
      )}
      {error && <p className="error-message">{error}</p>}
      {fetchedHTML && fetchedHTML.length > 0 && (
        <object data={fetchedHTML} />
      ) || (
        <>
          <h3>Visualização padrão</h3>
          {defaultArticle}
        </>
      )
      }
    </article>
  );
};

export default ArticleContainer;
