class CreateProduct extends React.Component {
  render () {
    return (
      <div>
        <input id="name" ref="name" placeholder="Enter Product Name"/>
        <input id="price" ref="price" placeholder="Enter Product Price"/>
        <select name="category" id="category">
          <option value="mobile">Mobile</option>
          <option value="watches">Watches</option>
          <option value="detergents">Detergents</option>
        </select>
        <button>'Submit'</button>
      </div>
    )
  }
}

