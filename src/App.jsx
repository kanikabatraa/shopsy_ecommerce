import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="dark:bg-gray-950 duration-200 dark:text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
