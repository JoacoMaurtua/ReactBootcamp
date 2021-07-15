import React from 'react';
import {Link} from 'react-router-dom';

export default function PageTwo() {
  return (
    <div>
      <p>This is the page two mdf</p>
      <button>
        <Link to = '/PageOne'>
            Go to page one
        </Link>
      </button>
    </div>
  )
}
