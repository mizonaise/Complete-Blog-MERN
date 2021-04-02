import {
  Footer,
  FrechStories,
  Header,
  Slider,
  TrendingPosts,
} from "../components";
import axios from "axios";
import { useEffect, useState } from "react";

function HomeScreen() {
  const [freshStories, setFreshStories] = useState({});
  const [trendingPosts, setTrendingPosts] = useState({});

  const fetchFreshStories = async () => {
    console.log("fresh stories");
    try {
      const response = await axios.get("/fresh-stories");
      // console.log(response.data);
      setFreshStories(response.data.posts);
      console.log(freshStories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTrendingPosts = async () => {
    console.log("trending posts");
    try {
      const response = await axios.get("/trending-posts");
      // console.log(response.data);
      setTrendingPosts(response.data.posts);
      console.log(trendingPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFreshStories();
    fetchTrendingPosts();
  }, []);

  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts trendingPosts={trendingPosts}/>
      <FrechStories freshStories={freshStories}/>
      <Footer />
    </>
  );
}

export default HomeScreen;
