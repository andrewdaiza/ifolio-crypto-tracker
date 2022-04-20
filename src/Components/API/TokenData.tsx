export const fetchTokenData = async (num: number, offset: number) => {
  try {
    const response = await fetch(
      `https://api.coincap.io/v2/assets?limit=${num}&offset=${offset}`
    );
    return await response.json();
  } catch (e) {
    throw e;
  }
};
export const fetchHistoryData = async (token: string) => {
  try {
    const response = await fetch(
      `https://api.coincap.io/v2/assets/${token}/history?interval=h1`
    );
    return await response.json();
  } catch (e) {
    throw e;
  }
};
