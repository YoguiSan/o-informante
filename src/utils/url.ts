const SiteList = require('./json/site-list.json');
const DomainSuffixList = require('./json/domain-suffix-list.json');

export const identifySite = (url: string) => {
  // console.log(url);

  const SuffixRegex: RegExp = new RegExp(`${DomainSuffixList.join('|')}`);

  const site: string = url.replace(/http:\/\/|https:\/\//, '').substr(
    url.search(/http:\/\/|https:\/\//),
    url.search(SuffixRegex) - 3
  ).replace('/', '');

  const { name, instructions } = SiteList[site] || SiteList.default;

  return {
    url: site,
    name,
    instructions,
  };
};
