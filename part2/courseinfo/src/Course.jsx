const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts = {props.course.parts}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part
        key={part.id}
        name={part.name}
        exercises={part.exercises}
        />
      ))}
      <Total parts = {props.parts}/>
    </div>
  )
}


const Total = (props) => {
  const total = props.parts.reduce((sum, part) => {
  return sum + part.exercises
}, 0)
  return (
    <div> 
       <strong>Total of {total} exercises</strong>
    </div>
  )
}

export default Course