import Img from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdGroups, MdDriveFileRenameOutline } from 'react-icons/md';
import { ImBlocked } from 'react-icons/im';
import { FaLightbulb } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';

import LogoBKImage from './images/logoBK.png';

const ListMenu = [
	{ icon: <MdGroups />, name: 'Groups', link: '/groups' },
	{ icon: <ImBlocked />, name: 'Blocked Account', link: '/block' },
	{ icon: <FaLightbulb />, name: 'Suggestion', link: '/suggestion' },
]

const SideBar = () => {
	const { pathname } = useRouter()
	console.log(pathname);

	return (
		<div className='h-screen flex flex-col bg-gray-900 text-gray-600 fixed top-0 left-0 w-48'>
			<div className='flex-1'>
				<div className="p-3 flex justify-center">
					<Img className='img' src={LogoBKImage} alt='Logo' />
				</div>
				<div>
					{ListMenu.map((item) => (
						<Link href={item.link} key={item.link} passHref>
							<div className={`flex flex-row p-3 justify-start items-center cursor-pointer ${pathname.includes(item.link) ? "text-blue-50 bg-indigo-600 bg-opacity-50 border-l-4 border-blue-50" : "hover:text-blue-400 hover:bg-indigo-900 hover:bg-opacity-80"}`}>
								<div className="pr-3">{item.icon}</div>
								<div>{item.name}</div>
							</div>
						</Link>
					)
					)}
				</div>
			</div>
			<div>
				<div className="flex flex-row p-3 justify-start items-center hover:text-blue-400 hover:bg-indigo-900 hover:bg-opacity-80">
					<div className="pr-3"><MdDriveFileRenameOutline /></div>
					<div>Admin</div>
				</div>
				<div className="flex flex-row p-3 justify-start items-center cursor-pointer hover:text-blue-400 hover:bg-indigo-900 hover:bg-opacity-80">
					<div className="pr-3"><RiAccountCircleFill /></div>
					<div>Logout</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;