// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

import Link from "next/link";

export const Paragraph = (p) => {
    const children = p.children;
    const props = {
        ...p,
        children: undefined
    }
    return (
        <p className="md:pb-0 text-lg md:text-xl lg:text-2xl max-w-[68vw] md:max-w-[72vw]" {...props}>
            {children}
        </p>
    )
};

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
    const standardHeaderClasses = `py-8 pb-2 md:pb-2 md:py-4 bg-gradient-to-tr from-purple-400 to-blue-500 bg-clip-text text-transparent`;
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        p: Paragraph,
        h1: ({ children }) => <h1 className={`${standardHeaderClasses} text-4xl md:text-5xl lg:text-6xl font-bold`}>{children}</h1>,
        h2: ({ children }) => <h2 className={`${standardHeaderClasses} text-3xl md:text-4xl lg:text-5xl font-bold`}>{children}</h2>,
        h3: ({ children }) => <h3 className={`${standardHeaderClasses} text-2xl md:text-3xl lg:text-4xl font-bold `}>{children}</h3>,
        h4: ({ children }) => <h4 className={`${standardHeaderClasses} text-2xl md:text-3xl lg:text-4xl font-medium`}>{children}</h4>,
        h5: ({ children }) => <h5 className={`${standardHeaderClasses} text-2xl md:text-3xl lg:text-4xl font-medium`}>{children}</h5>,
        h6: ({ children }) => <h6 className={`${standardHeaderClasses} text-2xl md:text-3xl lg:text-4xl font-medium `}>{children}</h6>,
        em: ({ children }) => <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent">{children}</b>,
        a: ({ children, ...props }) => <Link target="_blank" rel="noreferrer noopener" className="text-purple-400 hover:text-purple-500 hover:underline" {...props}>{children}</Link>,
        ...components,
    }
};