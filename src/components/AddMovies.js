import React from 'react'
import { useState } from 'react';

function AddMovies() {
    const [user, setUser] = useState('');

    const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

    const valEmail = (email) => {
        return emailRegex.test(email);
        
    }


    return (
      <div className="new-form">
        <h2>Fill this form to Request Movies</h2>
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />
  
          <label htmlFor="year">Year:</label>
          <input type="date" id="year" />
  
          <label htmlFor="description">Description:</label>
          <textarea id="description" />
          
          <label htmlFor="email">Provide your Email:</label>
          <input type='email'  name='user' placeholder='user email'  value={user || ""}  onChange={e => setUser(e.target.value.trim())} />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

export default AddMovies;