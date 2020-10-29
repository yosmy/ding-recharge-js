import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {Chart} from "@yosmy/ui";

const ComputeTransfers = ({
    ui, api, criteria
}) => {
    const [computation, setComputation] = useState(null);

    useEffect(
        () => {
            api.computeTransfers(
                criteria.user,
                criteria.from,
                criteria.to,
                criteria.timezone,
                criteria.group,
                // onReturn
                (computation) => {
                    setComputation(computation);
                }
            )
        },
        [api, criteria]
    );

    return <ui.layout>
        {computation !== null && <Chart
            data={computation}
            xAxis={{
                name: criteria.key !== 'current_year'
                    ? 'Día' : 'Mes',
                key: criteria.key !== 'current_year'
                    ? 'day' : 'month',
                tick: criteria.key !== 'current_year' ? 31 : 12
            }}
            lines={[{
                name: "Recargas",
                key: "total",
                unit: 'recargas',
            }]}
        />}
    </ui.layout>
}

ComputeTransfers.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    api: PropTypes.shape({
        computeTransfers: PropTypes.func.isRequired,
    }).isRequired,
    criteria: PropTypes.shape({
        key: PropTypes.string,
        user: PropTypes.string,
        from: PropTypes.number,
        to: PropTypes.number,
        timezone: PropTypes.string.isRequired,
        group: PropTypes.string,
    }).isRequired
};

export default ComputeTransfers;