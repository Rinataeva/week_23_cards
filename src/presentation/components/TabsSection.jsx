import Button from "./Button/Button";
// eslint-disable-next-line react/prop-types
export function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>Главная</Button>
      <Button isActive={active === "feedback"} onClick={() => onChange("feedback")}>Обратная связь</Button>
    </section>
  );
}
