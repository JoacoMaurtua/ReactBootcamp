import React from 'react';

const NewComponent = (props) => {
  const {children,header} = props;

  return(
    <div>
        <h1>
          {header}
        </h1>
        {children}
    </div>

  );
}

export default NewComponent;