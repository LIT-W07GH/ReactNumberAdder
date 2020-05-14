import React from 'react';

class NumberRow extends React.Component {
    render() {
        const { number, isAdd, onAddClick, onRemoveClick, onDoubleItClick } = this.props;
        return (
            <tr>
                <td>{number}</td>
                <td>

                    {isAdd ? <button className="btn btn-primary" onClick={onAddClick}>Add to Selected</button>
                        : <button className="btn btn-danger" onClick={onRemoveClick}>Remove from Selected</button>
                    }

                    {/* {isAdd && <button className="btn btn-primary" onClick={onAddClick}>Add to Selected</button>}
                    {!isAdd && <button className="btn btn-danger" onClick={onRemoveClick}>Remove from Selected</button>} */}
                </td>
                <td>
                    <button className="btn btn-info" onClick={onDoubleItClick}>Double it!</button>
                </td>
            </tr>
        )
    }
}

export default NumberRow;