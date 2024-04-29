import { Suspense } from "react";
import { NotFoundRedirectPage } from "./not-found-redirect";

// DEVだと無限にリロードされる.
export default function NotFoundPage() {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <NotFoundRedirectPage />
      </Suspense>
    </>
  );
}
