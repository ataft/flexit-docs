/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Install FlexIt</>,
    imageUrl: 'img/home_install.png',
    docLink: 'docs/install',
    description: (
      <>
        Got 5 minutes? That’s all the time you’ll need to download, install, and see how easy and powerful FlexIt is.
      </>
    ),
  },
  {
    title: <>Getting Started</>,
    imageUrl: 'img/home_start.png',
    docLink: 'docs/getting-started',
    description: (
      <>
        Quick start guide to get you familiar with FlexIt. Learn how to access FlexIt and build your first report and dashboard.
      </>
    ),
  },
  {
    title: <>Reporting Guide</>,
    imageUrl: 'img/home_analysis.png',
    docLink: 'docs/report',
    description: (
      <>
        Learn everything you need to know about creating reports in this detailed guide that walks you through all FlexIt has to offer. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description, docLink}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4 flx-gray', styles.feature)}>
      <div className="text--center">
        <a href={useBaseUrl(docLink)}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </a>
      </div>
      <h3><a href={useBaseUrl(docLink)}>{title}</a></h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="User guides and documentation for FlexIt Analytics">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
