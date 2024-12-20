import { useRef, useState } from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef(); // 추가

    console.log("nameInput>>>",nameInput)

    const { name, nickname } = inputs;

    // console.log(inputs)

    const onChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setInputs({ ...inputs, [name]: value })
        console.log(inputs)
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus(); // 추가
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;