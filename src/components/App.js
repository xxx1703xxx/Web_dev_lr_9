import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setFilter } from '../features/shopping/shoppingSlice';

function App() {
    const dispatch = useDispatch();
    const { items, filter } = useSelector(state => state.shopping);

    const handleAdd = () => {
        const item = prompt('Enter item:');
        if (item) {
            dispatch(addItem(item));
        }
    };

    const handleRemove = () => {
        const item = prompt('Enter item to remove:');
        if (item) {
            dispatch(removeItem(item));
        }
    };

    const handleFilter = () => {
        const newFilter = prompt('Enter filter keyword:');
        dispatch(setFilter(newFilter));
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <button onClick={handleAdd}>Add Item</button>
            <button onClick={handleRemove}>Remove Item</button>
            <button onClick={handleFilter}>Set Filter</button>
            <h2>Items:</h2>
            <ul>
                {items
                    .filter(item => item.includes(filter))
                    .map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
        </div>
    );
}

export default App;
