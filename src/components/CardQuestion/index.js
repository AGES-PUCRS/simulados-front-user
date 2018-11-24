import React, { Component } from 'react'
import Card from '../Card'
import Icon from '../Icon'
import Score from '../Score'
import './card-question.scss'
import cn from 'classnames'

const CardQuestion = ({ area, getTime, toogle, onClick }) => (
  <Card
    className={cn('card-question', toogle && 'card-question--expanded')}
    onClick={onClick}
  >
    <div className="data-result data-result--areas">
      <div>{area.name}</div>
      <div>
        <Score
          hits={area.questions.filter(q => q.correct).length}
          total={area.questions.length}
        />
      </div>
      <div>
        <Icon name={toogle ? 'chevron-up' : 'chevron-down'} />
      </div>
    </div>
    <div className="card-question_toggle-questions">
      {area.questions.map((q, index) => (
        <div
          key={`${index}question-${q.id}`}
          className="data-result data-result--border-bottom data-result--questions"
        >
          <div>Questão {q.question_id}</div>
          <div className="flex items-center">
            <Icon
              name={q.correct ? 'check' : 'x'}
              color={q.correct ? '#629c44' : '#e61610'}
            />{' '}
            {getTime(q.time_to_answer)}
          </div>
        </div>
      ))}
    </div>
  </Card>
)

export default CardQuestion
