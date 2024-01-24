/**
 * Calculate charts data
 * @param chartsData
 * @return {{lang: string}[]}
 */
export const calculateCharts = (chartsData) => {
  const sumOfRows = Object.values(chartsData).reduce((acc, row) => {
    return acc + row;
  }, 0);

  return Object.keys(chartsData).map((lang) => [
    lang,
    (chartsData[lang] * 100) / sumOfRows || 0,
  ]);
};
