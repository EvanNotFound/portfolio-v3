import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => (
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 md:text-center sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => <h2 className="text-zinc-50">{children}</h2>,
    ...components,
  };
}
