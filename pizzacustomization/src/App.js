import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State variables to store size and toppings selection
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);

  // Map of size options and their prices
  const sizeOptions = {
    normal: 4.99,
    family: 7.99,
  };

  // Function to handle size selection
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  }

  // Function to handle topping selection
  const handleToppingChange = (event) => {
    const topping = event.target.value;
    if (toppings.includes(topping)) {
      // Remove topping if it is already selected
      setToppings(toppings.filter(t => t !== topping));
    } else {
      // Add topping if it is not already selected
      setToppings([...toppings, topping]);
    }
  }

  // Calculate total cost based on size and toppings selection
  const totalCost = sizeOptions[size] + (toppings.length * 0.99);

  return (
    <div className="container">
      <h1 className="header" >Pizza Customization</h1>
      <form>
        <div >
          <div className="form-label">
            <h3>Size:</h3>
            <label>
              Normal ($4.99) <input type="radio" value="normal" checked={size === 'normal'} onChange={handleSizeChange} />
            </label>
            <br />
            <label>
              Family  ($7.99) <input type="radio" value="family" checked={size === 'family'} onChange={handleSizeChange} />
            </label>
          </div>
          <div className="form-label">
            <h3>Toppings:</h3>
            <label>
              Cheese<input type="checkbox" value="cheese" checked={toppings.includes('cheese')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
             Pepperoni<input type="checkbox" value="pepperoni" checked={toppings.includes('pepperoni')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Salami<input type="checkbox" value="salami" checked={toppings.includes('salami')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Bacon<input type="checkbox" value="bacon" checked={toppings.includes('bacon')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Onion<input type="checkbox" value="onion" checked={toppings.includes('onion')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Chicken<input type="checkbox" value="chicken" checked={toppings.includes('chicken')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Tomato<input type="checkbox" value="tomato" checked={toppings.includes('tomato')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Mushroom<input type="checkbox" value="mushroom" checked={toppings.includes('mushroom')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Basli<input type="checkbox" value="basli" checked={toppings.includes('basli')} onChange={handleToppingChange} />
            </label>
            <br />
            <label>
              Beef<input type="checkbox" value="beef" checked={toppings.includes('beef')} onChange={handleToppingChange} />
            </label>
          </div>
        </div>
      </form>
      <div className="summary-box ">
        <h2 >Summary:</h2>
        <p className='p'>{size.replace(/^\w/, c => c.toUpperCase())} pizza, toppings: {toppings.join(', ')}</p>
        <p className='p'>Total cost: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;

