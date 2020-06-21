import React from 'react';

const EditExpensePage = (props) => (
    <div>
        This is the edit page of id {props.match.params.id}
    </div>
);

export default EditExpensePage;