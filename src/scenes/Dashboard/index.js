import React, { Component } from 'react'

import MenuCard from '../../components/MenuCard'
import http from '../../utils/http'

import './dashboard.scss'

//TODO: Tela Menu principal com opção de novo simulado
class Dashboard extends Component {
  render() {
    return (
      <div className="mainContainer">
        <h2 className="title">Simulados</h2>
        <MenuCard
          iconColor="#FE8184"
          icon="clipboard"
          label="Simular Prova"
          buttonLabel="Iniciar"
          onClick={() => this.doTest()}
        />
        <MenuCard
          iconColor="#5E69F5"
          icon="shuffle"
          label="Perguntas Aleatórias"
          buttonLabel="Iniciar"
          blueContainer
          onClick={() => this.doRandomQuestions()}
        />
      </div>
    )
  }

  async doTest() {
    console.log('Buscar teste...')
    let response = await http
      .post('http://localhost:3000/exam', {
        data: { student_id: 1 },
      })
      .then(result => {
        return result
      })
      .catch(err => {
        return err
      })
    console.log(response)
  }

  doRandomQuestions() {
    console.log('Buscar perguntas aleatorias...')
  }
}

export default Dashboard
