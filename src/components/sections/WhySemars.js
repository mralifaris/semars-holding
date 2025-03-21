import React from 'react';
import './WhySemars.css';
import Table from '../../assets/Table.png';

function WhySemars() {
  return (
    <section className="why-semars" id="why-semars">
      <div className="container">
        <h2>Why Semars Holding?</h2>
       <img src={Table} alt='Process'/>
      </div>
    </section>
  );
}

export default WhySemars;