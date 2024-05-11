const getAll = async () => {
  const response = await fetch('http://localhost:5143/api/place', {
    headers: {
      'accept': '*/*'
    }
  });

  return response.json();
};

export const placeApi = { getAll };