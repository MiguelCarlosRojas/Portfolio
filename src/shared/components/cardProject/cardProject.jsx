import styles from "./cardProject.module.css";
import { Link } from "react-router-dom";
import { dataCareers } from "../../../data/dataCareers";
import Carousel from "../../../shared/components/carousel/carousel";
import Chip from "../../../shared/components/chip/chip";
import LazyImage from "../../../shared/components/lazyImage/LazyImage";
import CardTitle from "../../../shared/components/cardTitle/cardTitle";

export default function CardProject({ project, isMinimal = false }) {
  return (
    <Link
      to={`/project/${project.url}`}
      state={{ transitionName: `project-image-${project.url}` }}
    >
      <article
        className={`${styles.cardProject} ${isMinimal && styles.minimal}`}
      >
        {/* Imagen duplicada con blur al hover */}
        <div className={styles.blurOverlay}>
          <LazyImage
            src={project.images[0].props.src}
            alt={project.images[0].props.alt}
            className={styles.blurImage}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.category}>
            {project.categories.map((category) => (
              <span key={category} className={styles.chip}>
                {dataCareers[category]?.svg} {dataCareers[category]?.title}
              </span>
            ))}
          </div>
          {isMinimal ? (
            <div className={styles.cardImage}>
              <LazyImage
                src={project.images[0].props.src}
                alt={project.images[0].props.alt}
              />
            </div>
          ) : (
            <Carousel carouselImages={project.images} motionId={project.url} />
          )}

          <div className={styles.cardFooter}>
            <span>
              <span>
                <CardTitle
                  text={project.title}
                  isMinimal={isMinimal ? true : null}
                />
                {!isMinimal && (
                  <ul>
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <Chip tag={tag} index={index} key={index} />
                    ))}
                  </ul>
                )}
              </span>
              <p>{project.shortDescription}</p>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
