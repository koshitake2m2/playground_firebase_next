import { Suspense } from 'react';
import HelloComponent from './hello-component';

function SearchBarFallback() {
  return <>placeholder</>;
}

export default function Page() {
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <HelloComponent />
      </Suspense>
    </>
  );
}
