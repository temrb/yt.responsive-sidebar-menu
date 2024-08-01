import { cn } from '@/lib/utils/tw.utils';
import React from 'react';

interface Props {
	direction: Direction;
	strength: Strength;
	children: React.ReactNode;
	className?: string;
}

type Direction =
	| 'vertical'
	| 'horizontal'
	| 'top'
	| 'bottom'
	| 'left'
	| 'right'
	| 'all';
type Strength = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const Fader = ({ direction, strength, children, className }: Props) => {
	const isVertical =
		direction === 'vertical' ||
		direction === 'top' ||
		direction === 'bottom';
	const isHorizontal =
		direction === 'horizontal' ||
		direction === 'left' ||
		direction === 'right';
	const isAll = direction === 'all';

	const sidesClass = cn('pointer-events-none absolute from-background');

	const strengthClass = cn({
		'h-2': strength === 'xs' && (isVertical || isAll),
		'h-4': strength === 'sm' && (isVertical || isAll),
		'h-6': strength === 'md' && (isVertical || isAll),
		'h-8': strength === 'lg' && (isVertical || isAll),
		'h-10': strength === 'xl' && (isVertical || isAll),
		'w-2': strength === 'xs' && (isHorizontal || isAll),
		'w-4': strength === 'sm' && (isHorizontal || isAll),
		'w-6': strength === 'md' && (isHorizontal || isAll),
		'w-8': strength === 'lg' && (isHorizontal || isAll),
		'w-10': strength === 'xl' && (isHorizontal || isAll),
	});

	const verticalTopClass = `${sidesClass} ${strengthClass} left-0 top-0 w-full bg-gradient-to-b`;
	const verticalBottomClass = `${sidesClass} ${strengthClass} bottom-0 left-0 w-full bg-gradient-to-t`;
	const horizontalLeftClass = `${sidesClass} ${strengthClass} left-0 top-0 h-full bg-gradient-to-r`;
	const horizontalRightClass = `${sidesClass} ${strengthClass} right-0 top-0 h-full bg-gradient-to-l`;

	const topClass = `${sidesClass} ${strengthClass} left-0 top-0 w-full h-1 bg-gradient-to-b`;
	const bottomClass = `${sidesClass} ${strengthClass} left-0 bottom-0 w-full h-1 bg-gradient-to-t`;
	const leftClass = `${sidesClass} ${strengthClass} left-0 top-0 w-1 h-full bg-gradient-to-r`;
	const rightClass = `${sidesClass} ${strengthClass} right-0 top-0 w-1 h-full bg-gradient-to-l`;

	return (
		<div className={`relative ${cn(className)}`}>
			{isVertical && (
				<>
					{direction === 'top' && <div className={`${topClass}`} />}
					{direction === 'bottom' && (
						<div className={`${bottomClass}`} />
					)}
					{direction === 'vertical' && (
						<>
							<div className={`${verticalTopClass}`} />
							<div className={`${verticalBottomClass}`} />
						</>
					)}
				</>
			)}
			{isHorizontal && (
				<>
					{direction === 'left' && <div className={`${leftClass}`} />}
					{direction === 'right' && (
						<div className={`${rightClass}`} />
					)}
					{direction === 'horizontal' && (
						<>
							<div className={`${horizontalLeftClass}`} />
							<div className={`${horizontalRightClass}`} />
						</>
					)}
				</>
			)}
			{isAll && (
				<>
					{direction === 'all' && (
						<>
							<div className={`${verticalTopClass}`} />
							<div className={`${verticalBottomClass}`} />
							<div className={`${horizontalLeftClass}`} />
							<div className={`${horizontalRightClass}`} />
						</>
					)}
				</>
			)}
			{children}
		</div>
	);
};

export default Fader;
