export const Row = ({ children }) => {
    return (
        <div className="flex flex-row items-center gap-x-2 font-medium">
            {children}
        </div>
    )
};

export const GradientBold = ({ children }) => {
    return (
        <b className="bg-gradient-brand bg-clip-text text-transparent">{children}</b>
    )
};

export const yellowGradientText = "bg-gradient-to-tr from-orange-400 to-yellow-500 text-transparent bg-clip-text";