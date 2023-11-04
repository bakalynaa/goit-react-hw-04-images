const API_KEY = '40462495-fc62fb076847436e97356d3b1';

const fetchImages = async (query, page) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export default fetchImages;
