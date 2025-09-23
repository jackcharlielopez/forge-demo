import { Pagination } from "./pagination.js";
import * as React from "react";
const meta = {
    title: "UI/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const Template = (args) => {
    const [page, setPage] = React.useState(1);
    return (<Pagination {...args} page={page} onPageChange={setPage}/>);
};
export const Default = {
    render: Template,
    args: {
        pageCount: 10,
        size: "md",
        showEdges: true,
    },
};
export const Large = {
    render: Template,
    args: {
        pageCount: 20,
        size: "lg",
        showEdges: true,
    },
};
