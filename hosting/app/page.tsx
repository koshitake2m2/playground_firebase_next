import { NextPage } from 'next';
import Link from 'next/link';

const page: NextPage = () => {
  const linkList = [
    '/about',
    '/lang',
    '/lang-local-storage',
    '/lang-search-params',
  ];
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
};

export default page;
