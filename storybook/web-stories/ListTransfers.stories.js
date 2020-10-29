import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";

import {ListTransfers, ShowTransfer} from '../ListTransfers';

export default {
  title: 'ListTransfers',
  component: ListTransfers,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ListTransfers
            ui={{
                layout: EmptyLayout,
                item: ({...data}) => {
                    return <ShowTransfer
                        key={data.id}
                        data={data}
                    />
                }
            }}
            api={{
                collectTransfers: (ids, user, product, from, to, skip, limit, onReturn) => {
                    setTimeout(() => {
                        switch (skip) {
                            case 0:
                                onReturn([
                                    {
                                        id: "1",
                                        user: "user-1",
                                        rid: "rid-1",
                                        account: "53123456",
                                        product: "p-1",
                                        amount: 20,
                                        receive: "20",
                                        currency: "CUC",
                                        profit: 1.4,
                                        date: 1603992716
                                    },
                                    {
                                        id: "2",
                                        user: "user-2",
                                        rid: "rid-2",
                                        account: "53123457",
                                        product: "p-2",
                                        amount: 20,
                                        receive: "20",
                                        currency: "CUC",
                                        profit: 1.4,
                                        date: 1603993716
                                    },
                                ]);

                                return;
                            case 2:
                                onReturn([
                                    {
                                        id: "3",
                                        user: "user-3",
                                        rid: "rid-3",
                                        account: "53123457",
                                        product: "p-1",
                                        amount: 20,
                                        receive: "20",
                                        currency: "CUC",
                                        profit: 1.4,
                                        date: 1605992716
                                    }
                                ]);

                                return;
                            default:
                                onReturn([]);
                        }
                    }, 3000);
                },
            }}
            criteria={{
                query: {
                    from: null,
                    to: null,
                },
                limit: 2

            }}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

