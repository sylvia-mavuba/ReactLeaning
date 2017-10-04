import React from 'react';

export default function PostsList (props) {
  return (
    <div>
      <ul>
        {
          //je souhaite afficher la liste des titres de mes articles en base
          props.postTitles.map((title, i) => {
            <li key={i}>{title}</li>
          })
        }
      </ul>
    </div>
  )
}