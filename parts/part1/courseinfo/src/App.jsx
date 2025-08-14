const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const exercises=props.exercises;
  return (
    <div>
      <p>{exercises[0].name} {exercises[0].numOfExercises}</p>
      <p>{exercises[1].name} {exercises[1].numOfExercises}</p>
      <p>{exercises[2].name} {exercises[2].numOfExercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.totalmessage} {props.totalcount}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [
    {name:part1,numOfExercises:exercises1},
    {name:part2,numOfExercises:exercises2},
    {name:part3,numOfExercises:exercises3}
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total totalmessage='Number of exercises' totalcount={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App