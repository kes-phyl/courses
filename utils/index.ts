export const fetchData = async (): Promise<any> => {
    try {
      const response = await fetch('http://34.250.175.84/msc/course/list');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

