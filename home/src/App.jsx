import './App.css'
import ProfileCard from './components/ProfileCard';
import Professional from './components/Profession';

function App() {
  return(
    <>
      <Professional></Professional>
      <h1>리엑트 처음</h1>
      <h2>리엑트 두번째</h2>
      <ul>
        <li>1교시</li>
        <li>2교시</li>
      </ul>
      <Professional></Professional>
      <ProfileCard></ProfileCard>
    </>
  )
}

export default App
