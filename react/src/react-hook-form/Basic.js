import React from 'react';
import '../styles/basic.scss';
import {useForm} from "react-hook-form";


const Basic = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="성을 입력하세요." ref={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="이름을 입력하세요." ref={register} />
        </div>

        <div>
          <label htmlFor="isHuman">로봇이 아닙니다~</label>
          <input
            type="checkbox"
            name="isHuman"
            value="yes"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="이메일을 입력하세요."
            type="email"
            ref={register}
          />
        </div>

        <input type="submit"/>
      </form>
    </div>
  );
};

export default Basic;