import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src={'/lang-local-storage/redirect.js'}></Script> {children}
    </>
  );
}
