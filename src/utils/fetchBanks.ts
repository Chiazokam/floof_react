import axios from 'axios';

const fetchBanks = async (query: string | null) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/banks${query ? `?search=${query}` : ''}`);
  return data;
};

export default fetchBanks;
