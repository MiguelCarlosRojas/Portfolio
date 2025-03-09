// Interfaz para los elementos a traducir
export interface TranslateElement {
    id: string;
    text: string;
  }
  
  // Interfaz para la respuesta de la API de traducción
  export interface TranslateResponse {
    translatedText: string;
  }