import Link from 'next/link';

const Page = () => {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center space-y-4'>
			<p className='text-center text-sm'>
				This is an example user (protected) page. You can access this
				page only when you are signed in. (usually setup through
				middleware)
			</p>
			<Link href='/' className='underline underline-offset-2'>
				Go to public routes
			</Link>
		</div>
	);
};

export default Page;
