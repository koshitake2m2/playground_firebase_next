"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// DEVだと無限にリロードされる.
export function NotFoundRedirectPage() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname.startsWith("/about")) {
    router.push("/about/404");
  }
  return (
    <>
      <h1>Not Found</h1>
      <Link href="/">Return Home</Link>
    </>
  );
}
