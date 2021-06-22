import React from 'react';


export default function FilteredList(props) {
  const {wordsGroup, inputWord} = props;

  return (
    wordsGroup.map((iterator,index) => {
      const start = iterator.indexOf(inputWord);
      const end = start + inputWord.length;
      
      return(
        <p key = {index}>
          {iterator.slice(0,start)}
          <b>{iterator.slice(start,end)}</b>
          {iterator.slice(end)}
        </p>
      )
    })
  );
}

