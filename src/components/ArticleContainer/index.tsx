import * as React from 'react';

import './index.less';

type ArticleContainerProps = {
  url: string;
}

const ArticleContainer = ({ url }: ArticleContainerProps) => {
  console.log(url)
  return(
    <article id="open-article">
      <iframe src={url}></iframe>
    </article>
  );
};

export default ArticleContainer;
