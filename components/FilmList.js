import React from 'react'

const FilmList = (props) => {
  
  return (
    <>
      { props.films.map((film, index) =>
          <div className=''>
            <img src={film.Poster} alt="Hary potter film" />
          </div>
        ) 
      }
    </>
  );
}

export default FilmList;