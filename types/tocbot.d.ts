declare module 'tocbot' {
  const tocbot: {
    init: (options: {
      tocSelector?: string,
			contentSelector?: string,
			headingSelector?: string,
			linkClass?: string,
			activeListItemClass?: string,
			listClass?: string,
			listItemClass?: string,
			collapseDepth?: number,
			scrollSmooth?: boolean,
			scrollSmoothDuration?: number,
			scrollSmoothOffset?: number,
      hasInnerContainers?: boolean,
    }) => void;
    destroy: () => void;
    refresh: () => void;
  };

  export default tocbot;
}
