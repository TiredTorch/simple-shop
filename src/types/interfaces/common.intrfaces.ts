export type PropsForModal<P = unknown> = P & {
    open: boolean;
    handleClose: VoidFunction;
};
