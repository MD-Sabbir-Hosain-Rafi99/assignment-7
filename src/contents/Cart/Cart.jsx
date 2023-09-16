/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import react from 'react';
import "./Cart.css"

const Cart = ({selectedCourses,remaining,totalCredit}) => {
  console.log(selectedCourses);
  return (
    <div className='cart-container'>
      <h5>Credit Hour Remaining :{remaining}hr</h5>
      <h5 className='cart-course'>Course Name</h5>
      {selectedCourses.map((course) => (
        <li key={course.id} className='cart-list' type="1">{course.name}</li>
      ))}
      <h5>Total Credit Hour :{totalCredit}hr</h5>
    </div>
  );
};

export default Cart;