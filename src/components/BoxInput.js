import { useState } from 'react';
import styled from 'styled-components';

function BoxInput(props) {
    const [values, setValues] = useState({ weight: '', height: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function onInputChange(event) {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function onButtonClick() {
        const { weight, height } = values;

        // คำนวณไม่ได้
        if (weight === '' || height === '') {
            setErrorMessage('กรุณาใส่ข้อมูลให้ครบถ้วน');
            props.onCalculateBmi(null);
            return;
        }

        // คำนวณได้
        const weightNumber = +weight;
        const heightNumber = +height;
        const bmi = weightNumber / Math.pow(heightNumber / 100, 2);
        setErrorMessage('');
        props.onCalculateBmi(bmi);
    }

    let errorElement = null;
    if (errorMessage !== '') {
        errorElement = <p>{errorMessage}</p>;
    }

    return (
        <div>
            <form className="max-w mx-auto">
                <div className="mb-5">
                    <label for="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">น้ำหนัก</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        name="weight"
                        placeholder="น้ำหนัก (กิโลกรัม)"
                        value={values.weight}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-5">
                    <label for="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">ส่วนสูง</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        name="height"
                        placeholder="ส่วนสูง (เซ็นติเมตร)"
                        value={values.height}
                        onChange={onInputChange}
                    />
                </div>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={onButtonClick}>
                    คำนวณ BMI
                </button>
                {errorElement}
            </form>
        </div>


        // <InputDiv>
        //     <p>
        //         <input
        //             className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //             type="number"
        //             name="weight"
        //             placeholder="น้ำหนัก (กิโลกรัม)"
        //             value={values.weight}
        //             onChange={onInputChange}
        //         />
        //     </p>
        //     <p>
        //         <input
        //             className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //             type="number"
        //             name="height"
        //             placeholder="ส่วนสูง (เซ็นติเมตร)"
        //             value={values.height}
        //             onChange={onInputChange}
        //         />
        //     </p>
        //     <p>
        //         <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={onButtonClick}>
        //             คำนวณ BMI
        //         </button>
        //     </p>
        //     {errorElement}
        // </InputDiv>
    );
}

// const InputDiv = styled.div`
//   border: 1px solid darkgray;
//   margin-bottom: 16px;
//   padding: 16px;
// `;

export default BoxInput;