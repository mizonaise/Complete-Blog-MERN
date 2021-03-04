import {
  Footer,
  FrechStories,
  Header,
  Slider,
  TrendingPosts,
} from "../components";

function HomeScreen() {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FrechStories />
      <Footer />
    </>
  );
}

export default HomeScreen;
