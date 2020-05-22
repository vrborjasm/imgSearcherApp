import React, {useState} from 'react';
import Error from './Error';

const Form = ({setSearch}) => {

    const [error, setError] = useState(false);
    const [word, setWord] = useState('');

    const handleChange = e => {
        setWord(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if(word.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setSearch(word);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar una imagen..."
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscas"
                    />
                </div>
            </div>
            { error ? <Error message="La busqueda no puede ser vacia"/> : null}
        </form>
     );
}
 
export default Form;
