import AppRouter from "@/router/AppRouter";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;