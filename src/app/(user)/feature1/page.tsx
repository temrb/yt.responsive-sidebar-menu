import Link from 'next/link';

const Page = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<Link href='/' className='underline underline-offset-2'>
				Go to public routes
			</Link>
		</div>
	);
};

export default Page;
