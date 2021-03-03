import * as React from 'react';

import './index.less';

type ArticleContainerProps = {
  url: string;
}

const ArticleContainer = ({ url }: ArticleContainerProps) => {
  /*
  const [html, setHtml] = React.useState<any>({});

  React.useEffect(() => {
    const doc = new Promise((resolve, reject) => {
      const response = open(url);

      resolve(response);
    });

    console.log(doc)

    setHtml(doc);
  }, [url]);

  const open = async (url: string): Promise<string|void> => {
    const resp = await fetch(url, { mode: 'no-cors' })
      .then((response) => response.text())
      .then((html) => html)
      .catch((error) => {
        console.warn(error);
      });

    return resp;
  }
  */

  return(
    <article id="open-article-container">
      {url && <object id="open-article-content" type="text/html" data={url} />}
    </article>
  );
};

export default ArticleContainer;
