import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			<main className="flex">
				<Sidebar></Sidebar>
				{children}
			</main>
		</div>
	);
}
