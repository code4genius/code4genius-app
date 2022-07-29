import { useUserEmail } from '@nhost/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();
  const userEmail = useUserEmail();
  return (
    <header className="bg-header border-b-brd sticky border-b">
      <div className="place-content-between flex flex-row max-w-5xl py-4 mx-auto">
        <div className="flex w-48">
          <Link href="/">
            <a className="text-md self-center cursor-pointer">Conference</a>
          </Link>
        </div>
        <div className="text-list w-52 flex flex-row self-center space-x-2 text-sm font-medium list-none">
          <li
            className={clsx(
              'hover:text-white py-1 px-2 cursor-pointer',
              asPath === '/speakers' && 'text-white',
            )}
          >
            <Link href="speakers">Speakers</Link>
          </li>
          <li
            className={clsx(
              'hover:text-white py-1 px-2 cursor-pointer',
              asPath === '/talks' && 'text-white',
            )}
          >
            <Link href="talks">Talks</Link>
          </li>
          <li
            className={clsx(
              'hover:text-white py-1 px-2 cursor-pointer',
              asPath === '/about' && 'text-white',
            )}
          >
            <Link href="about">About</Link>
          </li>
        </div>
        <div className="flex w-48">
          {userEmail ? (
            <div>
              <button className="px-2 py-1 text-xs border rounded-md">
                {userEmail}
              </button>
            </div>
          ) : (
            <Link href="signin">
              <button className="border text-xs py-1.5 text-list hover:border-white hover:text-white transition-colors duration-200 border-list rounded-md flex w-full items-center justify-center">
                Organizer Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
