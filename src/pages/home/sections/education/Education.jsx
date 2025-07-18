import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Education.module.css";
import { dataEducation } from "../../../../data/dataEducation";
import SectionHead from "../../../../shared/components/sectionHead/sectionHead";
import Checkbox from "../../../../shared/components/checkbox/checkbox";
import ListEducation from "../../../../shared/components/listEducation/ListEducation";
import SortDropdown from "../../../../shared/components/sortDropdown/sortDropdown";
import SegmentedControls from "../../../../shared/components/segmentedControls/segmentedControls";
import CaptionText from "../../../../shared/components/captionText/captionText";

const viewModeOptions = {
  1: {
    title: "Ver en lista",
    svg: (
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4 12.0001H26M2 12.0001H3.2M2 3.6001H3.2M2 20.4001H3.2M10.4 3.6001H26M10.4 20.4001H26"
          stroke="#1D1D1D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  2: {
    title: "Ver en tarjetas",
    svg: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 7.05263C2 4.67032 2 3.48042 2.74021 2.74021C3.48042 2 4.67032 2 7.05263 2C9.43495 2 10.6248 2 11.3651 2.74021C12.1053 3.48042 12.1053 4.67032 12.1053 7.05263C12.1053 9.43495 12.1053 10.6248 11.3651 11.3651C10.6248 12.1053 9.43495 12.1053 7.05263 12.1053C4.67032 12.1053 3.48042 12.1053 2.74021 11.3651C2 10.6248 2 9.43495 2 7.05263ZM15.8947 20.9474C15.8947 18.5651 15.8947 17.3752 16.6349 16.6349C17.3752 15.8947 18.5651 15.8947 20.9474 15.8947C23.3297 15.8947 24.5196 15.8947 25.2598 16.6349C26 17.3752 26 18.5651 26 20.9474C26 23.3297 26 24.5196 25.2598 25.2598C24.5196 26 23.3297 26 20.9474 26C18.5651 26 17.3752 26 16.6349 25.2598C15.8947 24.5196 15.8947 23.3297 15.8947 20.9474ZM2 20.9474C2 18.5651 2 17.3752 2.74021 16.6349C3.48042 15.8947 4.67032 15.8947 7.05263 15.8947C9.43495 15.8947 10.6248 15.8947 11.3651 16.6349C12.1053 17.3752 12.1053 18.5651 12.1053 20.9474C12.1053 23.3297 12.1053 24.5196 11.3651 25.2598C10.6248 26 9.43495 26 7.05263 26C4.67032 26 3.48042 26 2.74021 25.2598C2 24.5196 2 23.3297 2 20.9474ZM15.8947 7.05263C15.8947 4.67032 15.8947 3.48042 16.6349 2.74021C17.3752 2 18.5651 2 20.9474 2C23.3297 2 24.5196 2 25.2598 2.74021C26 3.48042 26 4.67032 26 7.05263C26 9.43495 26 10.6248 25.2598 11.3651C24.5196 12.1053 23.3297 12.1053 20.9474 12.1053C18.5651 12.1053 17.3752 12.1053 16.6349 11.3651C15.8947 10.6248 15.8947 9.43495 15.8947 7.05263Z"
          stroke="#1D1D1D"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
};

export default function Education() {
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState(1);
  const [inProgress, setInProgress] = useState(false);
  const [sortOrder, setSortOrder] = useState("Más relevantes");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setViewMode(isMobile ? 2 : 1);
  }, [isMobile]);

  const displayedEducation = useMemo(() => {
    let filtered = dataEducation.filter(
      (education) => inProgress || education.endDate !== ""
    );

    if (sortOrder === "Más recientes") {
      filtered.sort(
        (a, b) => new Date(`${b.startDate}-01`) - new Date(`${a.startDate}-01`)
      );
    } else if (sortOrder === "Mayor duración") {
      filtered.sort((a, b) => {
        if (a.endDate === "" && b.endDate === "") return 0;
        if (a.endDate === "") return 1;
        if (b.endDate === "") return -1;
        return (b?.stats?.hours || 0) - (a?.stats?.hours || 0);
      });
    }

    return filtered;
  }, [sortOrder, inProgress]);

  return (
    <section id="education" className={styles.education}>
      <SectionHead
        title="Educación"
        imageName="book"
        description="Mi formación en desarrollo Full Stack combina habilidades en Frontend y Backend, complementadas con un enfoque en la creación de aplicaciones robustas, escalables y optimizadas profesionalmente."
      />
      <section className={styles.tools}>
        <Checkbox
          text="En curso"
          isChecked={inProgress}
          setIsChecked={setInProgress}
        />
        <span>
          {!isMobile && (
            <SegmentedControls
              size="small"
              controls={viewModeOptions}
              selectedControl={viewMode}
              setSelectedControl={setViewMode}
            />
          )}
          <SortDropdown
            options={["Más relevantes", "Más recientes", "Mayor duración"]}
            onSelectOption={setSortOrder}
          />
        </span>
      </section>
      <main
        className={`${styles.containerEducation} ${
          viewMode === 1 ? styles.containerList : styles.containerGrid
        }`}
      >
        <AnimatePresence>
          <header>
            <CaptionText text="Carrera / Curso" />
            <CaptionText text="Institución" />
            <CaptionText text="Habilidades" />
            <CaptionText text="Fecha" />
          </header>
          {displayedEducation.map((education, index) => (
            <motion.div
              key={education.url}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              exit={{ opacity: 0, y: 50 }}
              layoutId={education.url}
              transition={{ duration: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className={styles.motionCard}
            >
              <ListEducation
                key={index}
                education={education}
                viewMode={viewMode}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </section>
  );
}