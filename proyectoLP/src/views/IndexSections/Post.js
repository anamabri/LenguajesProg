import React, { Fragment } from 'react';

export class CreatePost extends React.Component {

state = {
    newPost: [],
    categorias: []
}

componentDidMount() {
    this.getCategories();
}

getCategories = () => {
    console.log('categoriasss');
    let url = 'http://127.0.0.1:8000/api/';
    const secretKey = localStorage.getItem('key');

    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `token ${secretKey}`
        }
    })
    .then(resp => {
        console.log('recibe la info para categorias', resp.status);
        return resp.json();
    })
    .then(info => {
        console.log('recibe las categorias', info);
        this.setState({
            categorias: this.state.categorias.concat(info)
        })
    })
}

handleChange = (e) => {
    const { name, value } = e.target;
    let newObj = { [name]: value };
    console.log(newObj);
    const newData = {...this.state.newPost, ...newObj};
    this.setState({
        newPost: newData
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log('posted ', this.state.newPost);
    const secretKey = localStorage.getItem('key');
    let url = 'http://127.0.0.1:8000/api/';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.state.newPost),
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            Authorization: `token ${secretKey}`
        }
    })
    .then(resp => {
        console.log('respuesta de la subida ', resp.status);
        return resp.text();
    })
}



render() {
    const categories = this.state.categorias.map((categoria, id) => {
        console.log('y? ', categoria.category);
    })
    return(
        <Fragment>
            <h1>Create page</h1>
            <form>
                <input name='title' placeholder='title' onChange={e => this.handleChange(e)}></input>
                <input name='author' placeholder='author' onChange={e => this.handleChange(e)}></input>
                <input name='description' placeholder='description' onChange={e => this.handleChange(e)}></input>
                <input name='content' placeholder='content' onChange={e => this.handleChange(e)}></input>
                <input name='category' placeholder='category' onChange={e => this.handleChange(e)}></input>
                <input name='photo' type="file" onChange={e => this.handleChange(e)}/>
                <button onClick={e => this.handleSubmit(e)}>Crea</button>
            </form>
        </Fragment>
    )
}
}