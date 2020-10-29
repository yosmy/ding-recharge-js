import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";

import ComputeTransfers from '../ComputeTransfers';

export default {
  title: 'ComputeTransfers',
  component: ComputeTransfers,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ComputeTransfers
            ui={{
                layout: EmptyLayout
            }}
            api={{
                computeTransfers: (user, from, to, timezone, group, onReturn) => {
                    onReturn([
                        {
                            year: 2020,
                            month: 1,
                            day: 1,
                            total: 5
                        },
                        {
                            year: 2020,
                            month: 1,
                            day: 3,
                            total: 15
                        },
                        {
                            year: 2020,
                            month: 3,
                            day: 5,
                            total: 1615
                        },
                    ]);
                },
            }}
            criteria={{
                from: null,
                to: null,
                timezone: "",
                group: "by-month"
            }}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

