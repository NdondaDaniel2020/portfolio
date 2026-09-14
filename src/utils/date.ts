/**
 * Formata datas ISO (ex: "2026-09-13") de acordo com o idioma ativo:
 * - pt: "13 de Setembro de 2026"
 * - en: "September 13, 2026"
 */
export function formatArticleDate(dateString: string, language: 'pt' | 'en'): string {
  if (!dateString) return '';
  
  // Trata ano, mês e dia diretamente para evitar desvios de fuso horário UTC
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    if (language === 'pt') {
      const monthsPt = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      return `${day} de ${monthsPt[month]} de ${year}`;
    } else {
      const monthsEn = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return `${monthsEn[month]} ${day}, ${year}`;
    }
  }

  // Fallback caso a string tenha outro formato
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;

  return language === 'pt'
    ? d.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
    : d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
