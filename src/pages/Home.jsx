import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
  const [workouts, setWorkouts] = useState([])
 const [show,setShow]=useState(false)
  useEffect(() => {
    const getData = async () => {
      const res = await ax.get('https://wourkout.onrender.com/api/workouts')
      console.log(res.data)
      setWorkouts(res.data)
    }
    getData()
  }, [show])
  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
            <WorkoutDetails workout={workout} show={show} setShow={setShow}  key={workout._id} />
        ))}
      </div>
           <WorkoutForm show={show} setShow={setShow}/>
    </div>

  )
}
export default Home