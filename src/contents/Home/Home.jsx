/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import react, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(()=>{
      fetch("/public/generated.json")
      .then(res=>res.json())
      .then(generated=>setAllCourses(generated))
    },[]);

      // Create handel select course function
      const handleSelectCourse=(course)=>{
        const isExist=selectedCourses.find(item => item.id == course.id);
        // Initial credit value set
        let credit = course.credit;
        if (isExist) {
          return alert("Already Selected")
        }else{
          // Total credit count calculate
          selectedCourses.forEach(item => {
            credit = credit + item.credit;
          })
          setSelectedCourses([...selectedCourses, course]);
        }
      }

  return (
    <div className='container'>
      <div className="home-container">
        <div className="card-container">
        {
          allCourses.map(course => (
            <div key={course.id} className="card">
          <div className="card-img">
            <img className='photo' src={course.image} alt="" />           
          </div>
          <h6 className='title'>{course.name}</h6>
          <p className='description'><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
          <div className="info">
            <p className='description'>$ {course.price}</p>
            <p className='description'>Credit: {course.credit}</p>
          </div>
          <button onClick={()=>handleSelectCourse(course)} className='btn'><strong>Select</strong></button>
        </div>
          ))
        }
        </div>
        <div className="cart">
          <Cart selectedCourses={selectedCourses}></Cart>
        </div>       
      </div>
    </div>
  );
};

export default Home;