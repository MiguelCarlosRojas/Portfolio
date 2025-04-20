import styles from "./footer.module.css";
import SocialButton from "../../components/socialButton/socialButton";
import { handleShare } from "../../utils/share";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <SocialButton
          iconName="share"
          type="secondary"
          handleClick={handleShare}
        />
        <span>
          Creado, diseñado, desarrollado por <strong>Miguel Angel</strong> con
          pasión por la innovación.
        </span>
      </div>
      <div className={styles.footerLinks}>
        <SocialButton iconName="email" type="secondary" />
        <SocialButton iconName="linkedin" type="secondary" />
        <span className={styles.separator}></span>
        <SocialButton iconName="youtube" type="secondary" />
        <SocialButton iconName="gitlab" type="secondary" />
        <SocialButton iconName="github" type="secondary" />
      </div>
    </footer>
  );
}
