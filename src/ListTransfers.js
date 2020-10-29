import React from 'react';
import PropTypes from "prop-types";
import {Container, LoaderListMore, LoaderListLoading, LoaderList, Text} from "@yosmy/ui";
import {format} from "@yosmy/date";

const ListTransfers = ({
    ui, api, criteria
}) => {
    return <LoaderList
        ui={{
            layout: ui.layout,
            empty: () => {
                return <Text>No hay recargas aún</Text>;
            },
            loading: LoaderListLoading,
            more: LoaderListMore,
            item: ui.item
        }}
        criteria={{
            query: criteria.query,
            limit: criteria.limit,
        }}
        onCollect={async (query, skip, limit) => {
            const transfers = await api.collectTransfers(
                null,
                query.user,
                null,
                query.from,
                query.to,
                skip,
                limit,
            );

            return {
                items: transfers,
            };
        }}
    />
}

ListTransfers.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        item: PropTypes.func.isRequired,
    }).isRequired,
    api: PropTypes.shape({
        collectTransfers: PropTypes.func.isRequired,
    }).isRequired,
    criteria: PropTypes.shape({
        query: PropTypes.shape({
            user: PropTypes.string,
            from: PropTypes.number,
            to: PropTypes.number,
        }).isRequired,
        limit: PropTypes.number
    }).isRequired,
};

const ShowTransfer = ({
    api, data, ...props
}) => {
    return <Container
        flow="row"
        margin={{
            top: 1
        }}
        {...props} // key
    >
        <Text
            width={150}
        >
            {data.id}
        </Text>
        <Text
            width={150}
            margin={{
                left: 2
            }}
        >
            {data.user}
        </Text>
        <Text
            width={150}
            margin={{
                left: 2
            }}
        >
            {data.rid}
        </Text>
        <Text
            width={150}
            margin={{
                left: 2
            }}
        >
            {data.account}
        </Text>
        <Text
            width={30}
            margin={{
                left: 2
            }}
        >
            {data.receive}
        </Text>
        <Text
            width={50}
            margin={{
                left: 2
            }}
        >
            {data.currency}
        </Text>
        <Text
            width={50}
            margin={{
                left: 2
            }}
        >
            {data.profit}
        </Text>
        <Text
            width={50}
            margin={{
                left: 2
            }}
        >
            ${data.amount}
        </Text>
        <Text
            width={300}
            margin={{
                left: 2
            }}
        >
            {format(data.date * 1000, "D [de] MMMM, YYYY, h:mm:ss A")}
        </Text>
    </Container>
}

ShowTransfer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        rid: PropTypes.string.isRequired,
        account: PropTypes.string.isRequired,
        product: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        receive: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        profit: PropTypes.number.isRequired,
        date: PropTypes.number.isRequired
    }).isRequired
};

export {
    ListTransfers,
    ShowTransfer
};