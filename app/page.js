import { Header } from "./components/Header";
import StyledComponentsRegistry from "./lib/registry";
export default function Home() {
  return (
    <StyledComponentsRegistry>
      <Header />
    </StyledComponentsRegistry>
  );
}
