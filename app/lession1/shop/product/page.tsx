import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  const debugApi = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  // Använd useEffect istället
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>This is our PRODUCT PAGE!</p>
        {debugApi().then(() => (
          <p>Test loading fallback! API took 2 sec successfully</p>
        ))}
      </main>
    </Suspense>
  );
}
