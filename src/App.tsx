import Container from "./components/shared/Container";
import { Button } from "./components/ui/button";

function App() {
  // description:: A vibrant online platform designed to make early education fun and engaging. Providing interactive lessons, educational games, and creative resources to inspire young minds and support teachers and parents in shaping bright futures.

  return (
    <Container>
      <div>
        <h1>Little Learners</h1>
      </div>
      <h1>Vite + React</h1>
      <Button>Shadcn</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Container>
  );
}

export default App;
