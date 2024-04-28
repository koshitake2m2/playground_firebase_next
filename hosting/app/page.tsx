import Link from "next/link";

export default function () {
  const linkList = ["/lang", "/lang-local-storage", "/lang-search-params"];
  const linkLiList = linkList.map((link) => (
    <li>
      <Link key={link} href={link}>
        {link}
      </Link>
    </li>
  ));
  return (
    <>
      <h1>Home</h1>
      <ul>{linkLiList}</ul>
    </>
  );
}
