import React from 'react';
import NumberRow from './NumberRow';
import SelectedNumbersDisplay from './SelectedNumbersDisplay';
import { produce } from 'immer';

let id = 0;

class NumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: []
    }

    getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

    onAddNumberClick = () => {
        const number = this.getRandomNumber();
        id++;
        //this.setState({ numbers: [...numbers, { id, number }] });
        const nextState = produce(this.state, draft => {
            draft.numbers.push({ id, number });
        });
        this.setState(nextState);
    }

    onAddToSelectedClick = number => {
        const { selectedNumbers } = this.state;
        this.setState({ selectedNumbers: [...selectedNumbers, number] });
    }

    onRemoveFromSelectedClick = ({ id }) => {
        const { selectedNumbers } = this.state;
        this.setState({ selectedNumbers: selectedNumbers.filter(n => n.id !== id) });
    }

    onDoubleItClick = id => {
        // const obj = { ...this.state.numbers.find(i => i.id === id) };
        // obj.number *= 2;
        // const numbersCopy = [...this.state.numbers];
        // const index = numbersCopy.findIndex(obj => obj.id === id);
        // numbersCopy[index] = obj;
        // this.setState({ numbers: numbersCopy });

        const nextState = produce(this.state, draft => {
            const obj = draft.numbers.find(i => i.id === id);
            obj.number *= 2;
        });

        this.setState(nextState);
    }

    render() {
        const { numbers, selectedNumbers } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg btn-block" onClick={this.onAddNumberClick}>Add</button>
                    </div>
                </div>
                <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Number</th>
                                <th>Add/Remove</th>
                                <th>Double</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map(obj => {
                                let { number, id } = obj;
                                return <NumberRow
                                    key={id}
                                    number={number}
                                    isAdd={!selectedNumbers.map(s => s.id).includes(id)}
                                    onAddClick={() => this.onAddToSelectedClick(obj)}
                                    onRemoveClick={() => this.onRemoveFromSelectedClick(obj)}
                                    onDoubleItClick={() => this.onDoubleItClick(id)}
                                />
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                <SelectedNumbersDisplay numbers={selectedNumbers.map(i => i.number)} />
            </div>
        )
    }
}

export default NumberTable;