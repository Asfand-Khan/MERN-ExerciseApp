export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd75e0c86a2mshb694b704ad56b2ap144bcbjsnbd38d216d5dc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd75e0c86a2mshb694b704ad56b2ap144bcbjsnbd38d216d5dc',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}