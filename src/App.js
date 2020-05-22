import React, {useState, useEffect}  from 'react';
import Form from './components/Form';
import ImgList from './components/ImgList';

function App() {

  const [search, setSearch] = useState('');
  const [imgList, setImgList] = useState([]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);

  useEffect(() => {
    if(search === '') return;

    const requestApi = async () => {
      
      const pages = 30;
      const key = '16502996-a490ff3707345a79ef7f52320';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${pages}&page=${page}`;

      const resp = await fetch(url);
      const result = await resp.json();
      setImgList(result.hits)
      setAllPages(Math.ceil(result.totalHits/pages));

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});
    }
    requestApi();
  },[search,page])

  const preview = () => {
    const newPage = page - 1;

    if(newPage === 0) return;

    setPage(newPage);
  }

  const next = () => {
    const newPage = page + 1;

    if(newPage > allPages) return;

    setPage(newPage);
  }  

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form 
          setSearch={setSearch}
        />
      </div>
      <div className="row justify-content-center">
        <ImgList
          imgList={imgList}
        />

        {(page === 1) ? null : (
          <button
          type="button"
          className="btn btn-info mr-1"
          onClick={preview}
        >&laquo; Anterior</button>
        )}

        {(page === allPages) ? null : (
          <button
          type="button"
          className="btn btn-info"
          onClick={next}
        >Siguiente &raquo;</button>
        )}

      </div>
    </div>
  );
}

export default App;
