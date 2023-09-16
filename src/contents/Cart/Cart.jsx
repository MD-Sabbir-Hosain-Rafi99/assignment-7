/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import react from 'react';
import "./Cart.css"

const Cart = ({selectedCourses}) => {
  return (
    <div>
      <h5 className='cart-course'>Course Name</h5>
      {selectedCourses.map((course) => (
        <li key={course.id} className='cart-list' type="1">{course.name}</li>
      ))}
    </div>
  );
};

export default Cart;