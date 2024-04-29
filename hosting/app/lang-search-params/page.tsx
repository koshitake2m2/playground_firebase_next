import { Suspense } from 'react';
import { WelcomeComponent } from './welcome-component';

export default function LangPage() {
  return (
    <>
      <Suspense fallback={<></>}>
        <WelcomeComponent />
      </Suspense>
    </>
  );
}
