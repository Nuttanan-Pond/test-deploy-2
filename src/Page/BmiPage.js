import { React, useState } from 'react'
import BoxInput from '../components/BoxInput'
import BoxOutput from '../components/BoxOutput'

function BmiPage() {
    const [bmi, setBmi] = useState(null);
    return (
        <div className="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h4 className='text-3xl'>BMI Calculator</h4>
            <br />
            <BoxInput onCalculateBmi={setBmi} />
            <br />
            <BoxOutput bmi={bmi} />
        </div>
    )
}

export default BmiPage