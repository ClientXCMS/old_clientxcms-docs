import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestion des revenues',
    Svg: require('@site/static/img/payment.svg').default,
    description: (
      <>
        Acceptez les paiements de votre clientèle via les passerelles de paiements pré-installées. Gérez des <b>Devis</b>, <b>Taxes</b>,  <b>Livraison de service/gestion de service</b>, <b>Factures</b> de vos clients.
      </>
    ),
  },
  {
    title: 'Installation & Configuration',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Installez et configurez votre espace client aussi rapidement que possible. Reliez votre Panel externe à <b>CLIENTXCMS</b> puis créez des <b>offres</b> en les ajoutants dans un <b>groupe</b> et <b>vendez-les</b>.
      </>
    ),
  },
  {
    title: 'Personnalisation de l\'espace client',
    Svg: require('@site/static/img/custom.svg').default,
    description: (
      <>
      Faite de votre <b>espace client</b> un <b>espace privilégiés</b> pour vos clients. Il est important que vos clients se repèrent grâce à votre <b>Logo</b>, <b>Favicon</b>, <b>Thème</b> ou <b>Couleur primaire</b>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
