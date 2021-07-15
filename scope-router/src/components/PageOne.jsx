import React from 'react';
import {Link} from 'react-router-dom';

export default function PageOne() {
  return (
    <div>
      <p>This is the page one mdf</p>
      <button>
        <Link to = '/PageTwo'>
            Go to page two
        </Link>
      </button>
    </div>
  )
} 
