import axios from "axios";
import React, { useState, useEffect } from "react"
import { Row, Col, Form, Input, Container, Button, CardBody, CardFooter, Card, CardText, Spinner } from 'reactstrap'
import Img from "./assets/saturday-logo-white.png"
function App() {
  const [options, setOptions] = useState([])
  const [selectAno, setSelectAno] = useState("")
  const [cardsMovies, setCardMovies] = useState([])
  const [genero, setGenero] = useState("")
  const [bellong, setBellong] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [ano, setAno] = useState("")
  const [selectedGen, setSelectGen] = useState("")
  const [detailsMovieSelected, setDetailsMovieSelected] = useState([])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=1075b8cb5d9067d5349a423c694f21fb").then(res => {
      setOptions(res.data.genres)

    }).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/240list?api_key=1075b8cb5d9067d5349a423c694f21fb").then(res => {
      setBellong(res.data.belongs_to_collection.poster_path)

    }).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get("http://localhost:3000/lastpesquisa").then(res => {
      console.log(res.data)
      setCardMovies(res.data)
    }).catch(err => console.log(err))
  }, [])
  const anos = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ]

  const teste = [0, 1, 2, 3]

  function asyncSubmit(event) {
    event.preventDefault()
    try {
      const resp = axios.post('http://localhost:3000/pesquisa', {
        usuario: "gustavo",
        titulo: nome,
        genero: selectedGen,
        datalanc: nascimento,
        imdb: bellong,
      })
      console.log(resp)
    } catch (er) {
      console.log(er)
    }

  }

  return (
    <div className="App" >
      <Container>


        <Row>
          <Col className="col-md-4  justify-content-center align-items-center pt-5">
            <img src={Img} width="350px" />
            <Form onSubmit={asyncSubmit} method="post">
              <Input
                className="form-control mt-5"
                type="text"
                size="lg"
                name="nome"
                placeholder="Nome"
                onChange={e => setNome(e.target.value)}
                value={nome}
              />
              <Input
                className="form-control mt-2"
                type="email"
                size="lg"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <Input
                className="form-control mt-2"
                type="date"
                name="nascimento"
                size="lg"
                placeholder="Nome"
                onChange={e => setNascimento(e.target.value)}
                value={nascimento}
              />

              <Input
                className="form-control mt-2"
                size="lg"
                name="genero"
                type="select"
                onChange={e => setSelectGen(e.target.value)}
                value={selectedGen}
              >

                <option value="Sem">Sem Genero</option>
                {options.map((key, i) =>
                  (<option key={key.name} value={key.name}>{key.name}</option>)
                )}
              </Input>
              <Input type="select" className="mt-2 "
                size="lg"
                value={selectAno}
                onChange={(e) => setSelectAno(e.target.value)}
              >
                <option value="Sem Ano">Sem Ano</option>
                {anos.map((key, i) => {
                  return (<option key={key} value={key}>{key}</option>)
                })}
              </Input>
              <Button color="primary" size=" lg" type="submit" className="form-control mt-2" >Pesquisar</Button>
            </Form>

          </Col>

          <Col className="col-md-6">
            <Row>
              {cardsMovies.length > 0 ? cardsMovies.map(
                key => {
                  return (
                    <Col className="col-md-6  justify-content-center align-items-center pt-5">
                      <Card>

                        <CardBody >
                          <img className="img-fluid" width={258} src={"https://image.tmdb.org/t/p/w500/" + key.imdb} />
                          <div className="text-center">
                            <CardText>
                              {key.genero} - ${key.datalanc && key.datalanc.toLocaleString().split("T")[0]}
                            </CardText>

                            <Button color="primary" onClick={() => {
                              window.open("https://image.tmdb.org/t/p/w500/" + key.imdb)
                            }} >
                              Datalhes
                            </Button>
                          </div>

                        </CardBody>
                      </Card>
                    </Col>
                  )
                }


              ) : <div className="w-100 d-flex justify-content-center align-items-center"><Spinner color="white" /></div>}

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
