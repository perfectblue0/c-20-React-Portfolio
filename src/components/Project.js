import React from 'react';
import randPass from '../assets/projectImages/random-pass.png';
import timedQuiz from '../assets/projectImages/timed-quiz.png';
import workdaySched from '../assets/projectImages/work-day-sched.png';
import noteTaker from '../assets/projectImages/note-taker.png'

function Project() {
    return(
        <div>
            <div>
                <h3>Title of First Project</h3>
                <img src={randPass} alt="Random-password-generator"
                />
                <p>Link to the deployed application</p>
                <p>second link to the corresponding Github repository</p>
            </div>
            <div>
                <h3>Title of Second Project</h3>
                <img src={timedQuiz} alt="Timed-quiz"
                />
                <p>Link to the deployed application</p>
                <p>second link to the corresponding Github repository</p>
            </div>
            <div>
                <h3>Title of Third Project</h3>
                <img src={workdaySched} alt="Workday-scheduler"
                />
                <p>Link to the deployed application</p>
                <p>second link to the corresponding Github repository</p>
            </div>
            <div>
                <h3>Title of Fourth Project</h3>
                <img src={noteTaker} alt="Note-taker"
                />
                <p>Link to the deployed application</p>
                <p>second link to the corresponding Github repository</p>
            </div>
        </div>
    );
}

export default Project