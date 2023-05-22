import styled from '@emotion/styled'

const Box = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  width: 347px;
  margin: 40px auto;
`;

const Square =styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid black;
`

const Board = ({size}) => {

  const renderSquares = () => {
    const squares = [];

    for(let i = 0; i < size * size; i++){
      squares.push(<Square/>);
    }
    return squares;
  }
  return (
    <Box>
      {renderSquares()}
    </Box>
  )
};

export default Board;