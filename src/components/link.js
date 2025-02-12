import React from 'react';

const links = {
  CONFIG:
    'https://github.com/chrisrzhou/google-globe-trends/tree/master/src/config.js',
  GITHUB_REPO: 'https://github.com/afernandodan/eperdemic-frontier',
  GOOGLE_TRENDS_API: 'https://www.npmjs.com/package/google-trends-api',
  JAMSTACK: 'https://jamstack.org/',
  METOO: 'https://metoorising.withgoogle.com/',
  NETLIFY_DEPLOY:
    'https://app.netlify.com/start/deploy?repository=https://github.com/chrisrzhou/google-globe-trends',
  GOOGLE_GLOBE_TRENDS_GITHUB: 'https://github.com/chrisrzhou/google-globe-trends',
  GRAFICOS_PATH: 'http://localhost:3000/graficos',
  HOME_PATH: 'http://localhost:3000/',
};

export default function Link({ children, className, link, onClick }) {
  const hasLink = links[link] && !onClick;
  return (
    <a
      className={className}
      href={hasLink ? links[link] : '#'}
      rel={hasLink ? 'noopener noreferrer' : undefined}
      target={hasLink ? '_blank' : undefined}
      onClick={onClick}>
      {children}
    </a>
  );
}
