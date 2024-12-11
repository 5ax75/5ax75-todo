export default function Sidebar() {
	return (
		<div className=" h-[calc(100vh-5rem)] bg-secondary max-w-80 flex">
			<ul className=" ms-10 mt-14 space-y-10 font-bold text-lg">
				<li>Accueil</li>
				<li>Agenda</li>
				<li>Messages</li>
				<li>Management</li>
			</ul>
		</div>
	);
}
