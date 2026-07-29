import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { formatDateToSubmit } from "../../../../shared/utils/formatDate";
import SectionHead from "../../../../shared/components/sectionHead/sectionHead";
import CardTitle from "../../../../shared/components/cardTitle/cardTitle";
import SocialButton from "../../../../shared/components/socialButton/socialButton";
import Snackbar from "../../../../shared/components/snackbar/snackbar";
import TextField from "../../../../shared/components/textField/textField";
import PrimaryButton from "../../../../shared/components/primaryButton/primaryButton";

export default function Contact() {
  const myEmail = "isakiangel6@gmail.com";

  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    message: false,
  });

  const [alertEmail, setAlertEmail] = useState(false);
  const [alertSubmit, setAlertSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extrae "name" y "value" del input
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullname: contactData.fullname === "", // true si está vacio
      email: contactData.email === "",
      message: contactData.message === "",
    };

    setErrors(newErrors);
    const allValid =
      !newErrors.fullname && !newErrors.email && !newErrors.message;

    if (allValid) {
      setContactData({
        fullname: "",
        email: "",
        message: "",
      });
      const [formattedDate, formattedHour] = formatDateToSubmit();

      const formData = {
        name: contactData.fullname,
        email: contactData.email,
        message: contactData.message,
        time: `${formattedDate} ${formattedHour}`,
      };

      // Enviar email
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key
        )
        .then(() => setAlertSubmit(true))
        .catch((error) =>
          console.error("Error al enviar el correo: ", error.text)
        );
    }
  };

  const handleEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setAlertEmail(true);
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <SectionHead
        title="Contáctame"
        imageName="message"
        description="Creemos soluciones impactantes, funcionales y innovadoras juntos. Contáctame para colaborar en proyectos que combinen creatividad, tecnología y un enfoque centrado en el usuario profesional."
      />
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <CardTitle text="Hablemos por redes" />
          <span>
            <a
              href="https://api.whatsapp.com/send?phone=51993857362&text=Hola,%20me%20interesa%20contratar%20un%20servicio%20de%20desarrollo.%20%C2%BFQu%C3%A9%20servicio%20desea%20adquirir%3A%20Backend,%20Frontend%20o%20Full%20Stack%3F"
              rel="noreferrer"
              target="_blank"
              className={styles.linkButton}
            >
              <span className={styles.info}>
                <span className={styles.icon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0C7.164 0 0 7.164 0 16C0 23.16 4.592 29.28 11.168 31.52L9.6 26.08C9.6 26.08 10.24 25.44 10.56 25.12C10.88 24.8 11.2 24.48 11.52 24.16C11.84 23.84 12.16 23.52 12.48 23.2C12.8 22.88 13.12 22.56 13.44 22.24C13.76 21.92 14.08 21.6 14.4 21.28C14.72 20.96 15.04 20.64 15.36 20.32C15.68 20 16 19.68 16.32 19.36C16.64 19.04 16.96 18.72 17.28 18.4C17.6 18.08 17.92 17.76 18.24 17.44C18.56 17.12 18.88 16.8 19.2 16.48C19.52 16.16 19.84 15.84 20.16 15.52C20.48 15.2 20.8 14.88 21.12 14.56C21.44 14.24 21.76 13.92 22.08 13.6C22.4 13.28 22.72 12.96 23.04 12.64C23.36 12.32 23.68 12 24 11.68C24.32 11.36 24.64 11.04 24.96 10.72C25.28 10.4 25.6 10.08 25.92 9.76C26.24 9.44 26.56 9.12 26.88 8.8C27.2 8.48 27.52 8.16 27.84 7.84C28.16 7.52 28.48 7.2 28.8 6.88C29.12 6.56 29.44 6.24 29.76 5.92C30.08 5.6 30.4 5.28 30.72 4.96C31.04 4.64 31.36 4.32 31.68 4C31.68 4 32 4.32 32 4.64C32 11.8 26.08 17.6 18.88 17.6C18.24 17.6 17.6 17.52 17 17.36C14.88 16.88 13.12 15.12 12.64 13C12.56 12.68 12.52 12.36 12.52 12.04C12.52 11.4 12.76 10.8 13.16 10.32C13.56 9.84 14.08 9.52 14.64 9.36C15.2 9.2 15.76 9.2 16.32 9.36C16.88 9.52 17.36 9.84 17.76 10.32C18.16 10.8 18.4 11.4 18.4 12.04C18.4 12.68 18.16 13.32 17.76 13.8C17.36 14.28 16.8 14.6 16.24 14.76C15.68 14.92 15.12 14.92 14.56 14.76C14 14.6 13.52 14.28 13.12 13.8C12.72 13.32 12.48 12.68 12.48 12.04C12.48 10.12 13.96 8.48 15.84 8C15.2 7.84 14.56 7.84 13.92 8C12.08 8.48 10.6 10.12 10.6 12.04C10.6 12.36 10.64 12.68 10.72 13C11.2 15.12 12.96 16.88 15.08 17.36C14.48 17.52 13.84 17.6 13.2 17.6C6 17.6 0 11.8 0 4.64C0 4.32 0.32 4 0.32 4C0.64 4.32 0.96 4.64 1.28 4.96C1.6 5.28 1.92 5.6 2.24 5.92C2.56 6.24 2.88 6.56 3.2 6.88C3.52 7.2 3.84 7.52 4.16 7.84C4.48 8.16 4.8 8.48 5.12 8.8C5.44 9.12 5.76 9.44 6.08 9.76C6.4 10.08 6.72 10.4 7.04 10.72C7.36 11.04 7.68 11.36 8 11.68C8.32 12 8.64 12.32 8.96 12.64C9.28 12.96 9.6 13.28 9.92 13.6C10.24 13.92 10.56 14.24 10.88 14.56C11.2 14.88 11.52 15.2 11.84 15.52C12.16 15.84 12.48 16.16 12.8 16.48C13.12 16.8 13.44 17.12 13.76 17.44C14.08 17.76 14.4 18.08 14.72 18.4C15.04 18.72 15.36 19.04 15.68 19.36C16 19.68 16.32 20 16.64 20.32C16.96 20.64 17.28 20.96 17.6 21.28C17.92 21.6 18.24 21.92 18.56 22.24C18.88 22.56 19.2 22.88 19.52 23.2C19.84 23.52 20.16 23.84 20.48 24.16C20.8 24.48 21.12 24.8 21.44 25.12C21.76 25.44 22.4 26.08 22.4 26.08L20.84 31.52C27.416 29.28 32 23.16 32 16C32 7.164 24.836 0 16 0Z"
                      fill="#25D366"
                    />
                  </svg>
                </span>
                <span>
                  <span>Escribime por WhatsApp</span>
                  <h4>+51 993 857 362</h4>
                </span>
              </span>
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M1 1L11 11L1 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={`mailto:${myEmail}`}
              rel="noreferrer"
              target="_blank"
              onClick={handleEmail}
              className={styles.linkButton}
            >
              <span className={styles.info}>
                <span className={styles.icon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66683 33.3332C5.75016 33.3332 4.96572 33.0071 4.3135 32.3548C3.66127 31.7026 3.33461 30.9176 3.3335 29.9998V9.99984C3.3335 9.08317 3.66016 8.29873 4.3135 7.6465C4.96683 6.99428 5.75127 6.66762 6.66683 6.6665H33.3335C34.2502 6.6665 35.0352 6.99317 35.6885 7.6465C36.3418 8.29984 36.6679 9.08428 36.6668 9.99984V29.9998C36.6668 30.9165 36.3407 31.7015 35.6885 32.3548C35.0363 33.0082 34.2513 33.3343 33.3335 33.3332H6.66683ZM20.0002 21.3748C20.1391 21.3748 20.2852 21.3537 20.4385 21.3115C20.5918 21.2693 20.7374 21.2071 20.8752 21.1248L32.6668 13.7498C32.8891 13.6109 33.0557 13.4376 33.1668 13.2298C33.2779 13.0221 33.3335 12.7926 33.3335 12.5415C33.3335 11.9859 33.0974 11.5693 32.6252 11.2915C32.1529 11.0137 31.6668 11.0276 31.1668 11.3332L20.0002 18.3332L8.8335 11.3332C8.3335 11.0276 7.84739 11.0209 7.37516 11.3132C6.90294 11.6054 6.66683 12.0148 6.66683 12.5415C6.66683 12.8193 6.72238 13.0626 6.8335 13.2715C6.94461 13.4804 7.11127 13.6398 7.3335 13.7498L19.1252 21.1248C19.2641 21.2082 19.4102 21.2709 19.5635 21.3132C19.7168 21.3554 19.8624 21.3759 20.0002 21.3748Z"
                      fill="#7D8AFF"
                    />
                  </svg>
                </span>
                <span>
                  <span>Enviame un mail</span>
                  <h4>{myEmail}</h4>
                </span>
              </span>
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M1 1L11 11L1 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/miguelacarlos/"
              rel="noreferrer"
              target="_blank"
              className={styles.linkButton}
            >
              <span className={styles.info}>
                <span className={styles.icon}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_22_100)">
                      <path
                        d="M0.29718 2.292C0.29718 1.026 1.34918 0 2.64718 0H29.9472C31.2452 0 32.2972 1.026 32.2972 2.292V29.708C32.2972 30.974 31.2452 32 29.9472 32H2.64718C1.34918 32 0.29718 30.974 0.29718 29.708V2.292ZM10.1832 26.788V12.338H5.38118V26.788H10.1832ZM7.78318 10.364C9.45718 10.364 10.4992 9.256 10.4992 7.868C10.4692 6.45 9.45918 5.372 7.81518 5.372C6.17118 5.372 5.09718 6.452 5.09718 7.868C5.09718 9.256 6.13918 10.364 7.75118 10.364H7.78318ZM17.5992 26.788V18.718C17.5992 18.286 17.6312 17.854 17.7592 17.546C18.1052 16.684 18.8952 15.79 20.2232 15.79C21.9612 15.79 22.6552 17.114 22.6552 19.058V26.788H27.4572V18.5C27.4572 14.06 25.0892 11.996 21.9292 11.996C19.3812 11.996 18.2392 13.396 17.5992 14.382V14.432H17.5672L17.5992 14.382V12.338H12.7992C12.8592 13.694 12.7992 26.788 12.7992 26.788H17.5992Z"
                        fill="#4557FB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_22_100">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.29718)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>
                  <span>Conectemos por</span>
                  <h4>LinkedIn</h4>
                </span>
              </span>
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M1 1L11 11L1 21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className={styles.social}>
              <SocialButton iconName="youtube" />
              <SocialButton iconName="gitlab" />
              <SocialButton iconName="github" />
            </div>
          </span>
          <Snackbar
            title="Email copiado"
            iconName="link"
            isVisible={alertEmail}
            onClose={() => setAlertEmail(false)}
          />
        </div>
        <div className={styles.contactRight}>
          <CardTitle text="Dejame tu mensaje" />
          <form className={styles.form}>
            <span>
              <TextField
                type="text"
                name="fullname"
                placeholder="¿Cómo te llamás?"
                maxLength={30}
                onChange={handleChange}
                value={contactData.fullname}
                isValid={errors.fullname}
                errorMessage="Completá con tu nombre"
              />
              <TextField
                type="email"
                name="email"
                placeholder="Email de contacto"
                maxLength={50}
                onChange={handleChange}
                value={contactData.email}
                isValid={errors.email}
                errorMessage="Dejame tu email para conversar"
              />
            </span>
            <TextField
              type="textarea"
              name="message"
              placeholder="¿Cómo podemos colaborar?"
              maxLength={2000}
              onChange={handleChange}
              value={contactData.message}
              isValid={errors.message}
              errorMessage="Compartime tu propuesta antes de enviar"
            />
            <PrimaryButton
              onClick={(e) => handleSubmit(e)}
              text="Enviar"
              minWidth="300px"
              centered
            />
          </form>
          <Snackbar
            title="Mensaje enviado"
            iconName="plane"
            isVisible={alertSubmit}
            onClose={() => setAlertSubmit(false)}
          />
        </div>
      </div>
    </section>
  );
}
