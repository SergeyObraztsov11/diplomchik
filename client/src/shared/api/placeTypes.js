const getAll = async () => {
  const response = await fetch('http://localhost:5143/api/placeType', {
    headers: {
      'accept': '*/*'
    }
  });

  return response.json();
};

export const placeTypeApi = { getAll };