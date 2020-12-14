import logo from './logo.svg';
import './App.css';


function App() {
  // const firstName = 'Supalerk';
  // const lastName ='Roengmongkol';
  // const age = '20';
  // const job = 'Student';

  // const mArr = [1, 2, 3, 4]

  // const mObj = {
  //   name: 'toto',
  //   age: '30'
  // }

  // const inputPlaceholder = 'Enter Your Detail'
  
  // const getFullName = (firstName, lastName) => 
  // {return `${firstName} ${lastName}`}

  // const detailIsInputBox = <input placeholder={inputPlaceholder} autoComplete/>

  // const myTeam = { 
  //   center: <li>Benzo Walli</li>, 
  //   powerForward: <li>Rasha Loa</li>, 
  //   smallForward: <li>Tayshaun Dasmoto</li>, 
  //   shootingGuard: <li>Colmar Cumberbatch</li>, 
  //   pointGuard: <li>Femi Billon</li> 
  // };

  // const G1="my-attribute-values";

  const blogObj = {
    titel: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
  }

  const blogArr = [
    {
      id: 1,
      titel: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 2,
      titel: 'Blog Title 2',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 3,
      titel: 'Blog Title 3',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    }
  ]

  const styles = {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: '0 2px 5px #ccc'
  }

  const blogCard = blogArr.map((item, pos) => {
    console.log(item);

    return (
      <div className="BlogCard" key={item.id}>
        <h3>{item.titel}</h3>
        <h3>{item.description}</h3>
      </div>
    )
   })

  return (
    <div className="App">
      {/* <h3>Team Name: {G1}</h3>
      <p>PowerForward: {myTeam.powerForward}</p>
      <p>Job: {job}</p>
      <p></p>
      
      {mArr[0]}

      {
        mArr[0] > 0? "True" : "False"
      } */}

    {/* <div className = "BlogCard">
      <h3>{blogArr[0]}</h3>

    </div>
    <hr></hr>
  <div style = {styles}>
      <h3>{blogArr[0]}</h3>

    </div>
    <hr></hr>
    <div style = {styles}>
      <h3>{blogArr[0]}</h3>

    </div>
    <hr></hr> */}

    {blogCard}


    </div>

    
  );
}

export default App;
