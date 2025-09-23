import { Tabs, TabPanel } from "./tabs.js";
import * as React from "react";
const meta = {
    title: "UI/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const tabs = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3", disabled: true },
];
export const Default = {
    render: (args) => (<Tabs {...args} tabs={tabs} defaultValue="tab1">
      <TabPanel value="tab1">Content for Tab 1</TabPanel>
      <TabPanel value="tab2">Content for Tab 2</TabPanel>
      <TabPanel value="tab3">Content for Tab 3</TabPanel>
    </Tabs>),
    args: {
        size: "md",
    },
};
export const Large = {
    render: (args) => (<Tabs {...args} tabs={tabs} defaultValue="tab2" size="lg">
      <TabPanel value="tab1">Content for Tab 1</TabPanel>
      <TabPanel value="tab2">Content for Tab 2</TabPanel>
      <TabPanel value="tab3">Content for Tab 3</TabPanel>
    </Tabs>),
    args: {},
};
