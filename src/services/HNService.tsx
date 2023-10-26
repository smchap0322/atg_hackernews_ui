
const getTopStories = async (listSize: number) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=${listSize}`);
  const topStoriesList = await response.json()
  const topStoriesInfo: any[] = [];

  for (const id of topStoriesList) {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const storyInfo = await response.json();
    topStoriesInfo.push(storyInfo);
  }

  return topStoriesInfo;
}

const HNService = {
  getTopStories
}

export default HNService;
