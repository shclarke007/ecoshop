import React from 'react';

export const ReleaseNotes = () => {
  return(
    <>
      <div className="d-flex flex-column align-items-center mb-4">
          <h3>Release Notes</h3>
          <p className="border-bottom border-info border-2">29/09/2021</p>
          <h4>Enhancement</h4>
            <ul>
              <li>Refactor codebase</li>
            </ul>
            <h4>Bug Fixes</h4>
            <ul>
              <li>Navigation bar links now working</li>
            </ul>
        </div>
    </>
  )
}