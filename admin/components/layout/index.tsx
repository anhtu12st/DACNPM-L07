import SideBar from './SideBar';

export interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	const { children } = props;

	return (
		<div className='min-h-screen w-screen pl-48 bg-gray-200'>
			<SideBar />
			<div className='p-5'>
				{children}
			</div>
		</div>
	);
}

export default Layout;