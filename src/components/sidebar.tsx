'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="h-[calc(100vh-5rem)] bg-secondary w-80 flex [&_*]:w-full [&_*]:ps-3 [&_*]:rounded-s-md [&_*]:py-1">
			<ul className="ms-10 mt-14 space-y-10 text-lg">
				<Link href={'/dashboard'}>
					<li className={pathname === '/dashboard' ? 'bg-primary' : ''}>
						Accueil
					</li>
				</Link>
				<Link href={'/dashboard/agenda'}>
					<li className={pathname === '/dashboard/agenda' ? 'bg-primary' : ''}>
						Agenda
					</li>
				</Link>
				<Link href={'/dashboard/messages'}>
					<li
						className={pathname === '/dashboard/messages' ? 'bg-primary' : ''}>
						Messages
					</li>
				</Link>
				<Link href={'/dashboard/management'}>
					<li
						className={
							pathname === '/dashboard/management' ? 'bg-primary' : ''
						}>
						Management
					</li>
				</Link>
			</ul>
		</div>
	);
}
