export const Apifetch = async () => {
  try {
    const res = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=205688b2&s=titanic&page=1"
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
