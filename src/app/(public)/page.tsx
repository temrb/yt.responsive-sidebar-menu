import Link from 'next/link';

const Page = () => {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center space-y-4'>
			<p className='text-center text-sm'>
				This is a public page. You can access this page without being
				signed in.
			</p>
			<Link href='/feature1' className='underline underline-offset-2'>
				Go to user (signed in) routes
			</Link>
		</div>
	);
};

export default Page;
