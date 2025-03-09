// Interfaz para los elementos a traducir (usada en translate.tsx)
export interface TranslateElement {
  id: string;
  text: string;
}

// Interfaz para la respuesta de la API de traducción (usada en translate.tsx)
export interface TranslateResponse {
  translatedText: string;
}

// Interfaz para las props de Navbar
export interface NavbarProps {
  translations: Record<string, string>;
  onToggleLanguage: () => void;
}

// Interfaz para las props de Header
export interface HeaderProps {
  translations: Record<string, string>;
}

// Interfaz para las props de About
export interface AboutProps {
  translations: Record<string, string>;
}

// Interfaz para las props de Available
export interface AvailableProps {
  translations: Record<string, string>;
}

// Interfaz para las props de Skills
export interface SkillsProps {
  translations: Record<string, string>;
}

// Interfaz para las props de Projects
export interface ProjectsProps {
  translations: Record<string, string>;
}

// Interfaz para las props de Footer
export interface FooterProps {
  translations: Record<string, string>;
}