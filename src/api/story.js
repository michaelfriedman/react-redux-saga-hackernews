const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

const fetchStories = query => fetch(HN_BASE_URL + query).then(r => r.json());

export { fetchStories };
