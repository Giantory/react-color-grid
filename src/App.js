import './App.css';
import { useState, useCallback } from 'react';

const createMatrix = (n, m) => {
  let matrix = [];
  let initcolor = "#000000";

  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < m; j++) {
      matrix[i].push(initcolor);
    }
  }
  return matrix;
}
let listColors = [{col:'#000000', isSelected: false}, {col: '#FF5733', isSelected: false}, {col: '#087E17', isSelected: false}]

function App() {
  const [matrix, setMatrix] = useState(createMatrix(5, 5));
  const [colors, setListColors] = useState(listColors);
  const [color, setColor] = useState('#000000');


  let changeColor = (colorSelected, indexColor) => {
    setColor(colorSelected)
    let copyColors = colors.map((el,i)=> {
      if(i===indexColor){
        el.isSelected = true
      }else{
        el.isSelected = false
      }
      return el
    })
    setListColors(copyColors)
    // console.log(colors, "colors")
    // console.log(colorSelected, "colorSelected")
    console.log(color, "color")
  }
  
  const handleClick = (row, column) => {
    let matrixCopy = [...matrix];

    console.log({row, column})
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === row && column === j) {
          matrixCopy[i][j] = color;
        }
      }
    }
    setMatrix(matrixCopy)
    console.log(matrix, "matrix")
  }

  return (
    <div className="App">
      <table>
        <tbody>
          {
            matrix.map((row, i) => {
              return <tr key={i}>
                {row.map((column, j) => {
                  return <td key={j} style={{ backgroundColor: column }} onClick={() => { handleClick(i, j) }}>
                  </td>
                })}
              </tr>
            })
          }
        </tbody>
      </table>
      <div>
        <h2>Select color and click on any cell</h2>
        <div className='listColors'>
        {
          colors.map((colorSelected,indexColor) => {
            return <div className={`boxChangeColor ${colorSelected.isSelected ? "addBorder": ""}`} key={indexColor} style={{backgroundColor: colorSelected.col}} onClick={() => {changeColor(colorSelected.col, indexColor)}}></div>
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;