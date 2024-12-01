import { CardSection } from "./presentation/CardSection/CardSection.jsx";
import Header from "./presentation/components/Header/Header.jsx";
import { IntroSection } from "./presentation/components/IntroSection.jsx";
import { TabsSection } from "./presentation/components/TabsSection.jsx";
import { FeedbackSection } from "./presentation/components/FeedbackSection.jsx";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && <CardSection />}
        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}

export default App;
