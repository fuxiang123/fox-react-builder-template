import axios from "axios";
import useSWR from "swr";

export default function useRedditList(key) {
  return useSWR(key, async () => {
    const response = await axios.get(
      "http://www.reddit.com/r/reactjs.json"
    );
    return response.data.data.children;
  });
}
