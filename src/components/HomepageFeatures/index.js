import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "AI Test Engineer Roadmap",
    Svg: require("@site/static/img/roadmap.svg").default,
    description: (
      <>
        A step-by-step roadmap to guide you on your journey to becoming a
        skilled AI Test Engineer.
      </>
    ),
    link: "./docs/ai-testing-career/ai-test-engineer-roadmap/roadmap-intro",
  },
  {
    title: "Level Up Your Testing Workflow",
    Svg: require("@site/static/img/generative-ai.svg").default,
    description: (
      <>
        Dive into practical applications of using generative AI to enhance your
        test coverage and efficiency.
      </>
    ),
    link: "/docs/generative-ai-testing-pro/generative-ai-powered-testing-hacks",
  },
  {
    title: "Learning Resources",
    Svg: require("@site/static/img/learning-resources.svg").default,
    description: (
      <>
        Explore a curated collection of resources to equip yourself with the
        knowledge of AI testing concepts and technologies.
      </>
    ),
    link: "docs/learning-resources/courses-books-blogs",
  },
];

function Feature({Svg, title, description, link}) {
  const svgContent = (
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
    </div>
  );

  const textContent = (
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={clsx("col col--4")}>
      {link ? (
        <a href={link} rel="noopener noreferrer">
          {svgContent}
        </a>
      ) : (
        svgContent
      )}
      {textContent}
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
