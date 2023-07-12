"use client";

import { Tooltip } from "@mui/joy";
import { MDXProvider } from "@mdx-js/react";

export const TooltipClient = (props) => {
    return <Tooltip {...props} />;
};

export const MDXProviderClient = (props) => {
    return <MDXProvider {...props} />;
};