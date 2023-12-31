import React from 'react';
import Project from '../Project';

function Portfolio() {
  return (
    <div className='titlePCont'>
      <h2>My Projects</h2>
      <div className='projectCont'>
        <Project
          pTitle="Random Password Generator"
          image="random-pass.png"
          depLink="https://perfectblue0.github.io/challenge-3-random-pass/"
          gitHLink="https://github.com/perfectblue0/challenge-3-random-pass"
        />
        <Project
          pTitle="Timed Quiz"
          image="timed-quiz.png"
          depLink="https://perfectblue0.github.io/challenge-4-timed-quiz-w-localStorage/"
          gitHLink="https://github.com/perfectblue0/challenge-4-timed-quiz-w-localStorage"
        />
        <Project
          pTitle="Work Day Scheduler"
          image="work-day-sched.png"
          depLink="https://perfectblue0.github.io/c-5-workday-hour-scheduler-w-localStorage/"
          gitHLink="https://github.com/perfectblue0/c-5-workday-hour-scheduler-w-localStorage"
        />
        <Project
          pTitle="Note Taker"
          image="note-taker.png"
          depLink="https://vast-depths-98905.herokuapp.com/"
          gitHLink="https://github.com/perfectblue0/c-11-Express-Note-Taker"
        />
        <Project
          pTitle="Group Project 1: Sunny Search"
          image="sunny-s.png"
          depLink="https://perfectblue0.github.io/group-project-1/"
          gitHLink="https://github.com/perfectblue0/group-project-1"
        />
        <Project
          pTitle="My First Portfolio"
          image="first-port.png"
          depLink="https://perfectblue0.github.io/challenge-2-portfolio/"
          gitHLink="https://github.com/perfectblue0/challenge-2-portfolio"
        />
      </div>
    </div>
  );
};

export default Portfolio;
