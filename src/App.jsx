import { CardSection } from "./presentation/CardSection/CardSection.jsx";
import Header from "./presentation/components/Header/Header.jsx";
import { IntroSection } from "./presentation/components/IntroSection.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <CardSection />
      </main>
    </>
  );
}

export default App;
