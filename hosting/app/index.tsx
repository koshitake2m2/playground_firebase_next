import Link from "next/link";

export default function () {
  const linkList = ["/lang", "/lang-local-storage"];
  const linkListElements = linkList.map((link) => (
    <Link key={link} href={link}>
      {link}
    </Link>
  ));
  return (
    <>
      <h1>Home</h1>
      {linkListElements}
    </>
  );
}
