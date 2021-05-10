import axios from "axios";
import useSWR from "swr";

export default function useRedditList() {
  return useSWR("redditList", async () => {
    const response = await axios.get(
      "http://www.reddit.com/r/reactjs.json"
    );
    return response.data.data.children;
  });
}
