const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let exercises = {
    'glute': {
        'easy': 'glute bridge',
        'medium': 'squat',
        'hard': 'romanian deadlift', 
        'equipment needed': 'dumbbells',
        'glute bridge instructions': 'Lay on the floor. Tighten your abs. Squeeze your bottom to lift your hips into the air.',
        'squat instructions': 'start in a standing position. Dumbbells should be held at shoulder level. squat down like you are sitting in a chair. Stand back up and repeat. ',
        'romanian deadlift instructions': 'Hinge from your hips like you are going to touch your bottom to the wall behind you. Keep core engaged'
    },
    'shoulder':{
        'easy': 'lateral raises',
        'medium': 'overhead press',
        'hard': 'handstand push-up', 
        'equipment needed': 'dumbbells',
        'lateral raise instructions': 'grasp dumbbells. raise them out to the side, and lower with control.',
        'overhead press instructions': 'grasp dumbbells at shoulder height. press them overhead until your arms are by your ears. Lower with control',
        'handstand push-up': 'use a stable wall. perform a handstand with your feet on the wall. Lower your head down until touching the ground, then press back up.'
    },
    'unknown':{
        'easy': 'unknown',
        'medium': 'unknown',
        'hard': 'unknown', 
        'equipment needed': 'unknown',
        'instructions': 'unknown',
        'instructions': 'unknown',
        'instructions': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const exerciseName = request.params.name.toLowerCase()
    if(exercises[exerciseName]){
        response.json(exercises[exerciseName])
    }else{
        response.json(exercises['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})