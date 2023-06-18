import { ProcessProvider } from "lib/processContext";
import { Os } from "../components/pages/Os";

export default function OsPage() {
  return (
    <ProcessProvider>
      <Os />
    </ProcessProvider>
  )
}