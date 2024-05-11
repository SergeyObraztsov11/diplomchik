const getAll = async () => {
  const response = await fetch('http://localhost:5143/api/city', {
    headers: {
      'accept': '*/*'
    }
  });

  return response.json();
};

export const cityApi = { getAll };