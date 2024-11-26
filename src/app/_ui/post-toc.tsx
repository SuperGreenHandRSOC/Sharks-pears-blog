'use client';

import '@/styles/tocbot.css';
import { Variants, motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import tocbot from 'tocbot';

const listVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.08,
			delay: 0.255,
			type: 'spring',
			stiffness: 150,
			damping: 20
		}
	}
};

// const itemVariants: Variants = {
// 	hidden: { opacity: 0, y: 5, filter: 'blur(8px)' },
// 	visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
// };

export default function Toc({className}:{className:string}) {
	// const [highlightedHeadingId, setHighlightedHeadingId] = useState<
	// 	string | null
	// >(null);
	const { scrollY } = useScroll();

	useEffect(() => {
		tocbot.init({
			tocSelector: '.js-toc',
			contentSelector: '.js-toc-content',
			headingSelector: 'h2, h3, h4',
			linkClass: 'toc-link',
			activeListItemClass: 'is-active-li',
			listClass: 'toc-list',
			listItemClass: 'toc-list-item',
			collapseDepth: 6,
			scrollSmooth: true,
			scrollSmoothDuration: 420,
			scrollSmoothOffset: -10,
      hasInnerContainers: true,
		});
    

		const handleScroll = () => {
			const activeLink = document.querySelector('.toc-link.is-active-link');
			if (activeLink) {
				// setHighlightedHeadingId(
				// 	activeLink.getAttribute('href')?.slice(1) || null
				// );
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			tocbot.destroy();
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollY]);

	return (
		<div className={`toc-container ${className}`}>
			<motion.ul
				className="js-toc group pointer-events-auto flex flex-col space-y-2 text-zinc-500"
				initial="hidden"
				animate="visible"
				variants={listVariants}
			/>
			<Link className='mb-3 py-3 font-normal hover:font-bold transition-all duration-300' href="/Post">→ Back to Posts</Link>
		</div>
	);
}