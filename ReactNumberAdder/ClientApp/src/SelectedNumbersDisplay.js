import React from 'react';

class SelectedNumbersDisplay extends React.Component {
    render() {
        const { numbers } = this.props;
        return (
            <div className="row" style={{ background: '#F7F7F9', paddingTop: 10 }}>
                <div className="col-md-6 col-md-offset-3">
                    {!!numbers.length && <h3>Selected Numbers </h3>}
                    <ul className="list-group">
                        {numbers.map((n, i) => <li className="list-group-item" key={i}>{n}</li>)}
                    </ul>
                </div>
            </div>)

    }
}

export default SelectedNumbersDisplay;