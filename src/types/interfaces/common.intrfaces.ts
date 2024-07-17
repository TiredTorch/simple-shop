export type PropsForModal<P = unknown> = P & {
    open: boolean;
    handleClose: VoidFunction;
};

export type FormProps<FieldsData> = {
    onSubmit: (data: FieldsData) => void;
    initState: FieldsData;
};
