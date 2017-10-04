import React from 'react';

export default function MySecondComponentTest (props) {
  return (
    <div>
      /* exemple d'utilisation ... */
      {
        props.items.map((data, i) => {
          //...
        })
      }
    </div>
  )
}