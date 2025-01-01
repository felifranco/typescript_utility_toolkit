/**
 * Acorta una cadena a una longitud específica y añade "…" si es necesario.
 * @param text Cadena de texto que se desea acortar
 * @param maxLength Número máximo de caracteres que se desea mostrar
 * @returns Cadena de texto acortada
 */
export const truncate = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
