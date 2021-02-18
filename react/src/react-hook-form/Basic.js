import React from 'react';
import '../styles/basic.scss';
import {useForm} from "react-hook-form";


const Basic = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="성을 입력하세요." ref={register({ required: true })} />
          {errors.firstName && <p style={{ color: 'red' }}>성을 필수로 입력해주세요.</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="이름을 입력하세요." ref={register({ required: true })} />
          {errors.lastName && <p style={{ color: 'red' }}>이름을 필수로 입력해주세요.</p>}
        </div>

        <div>
          <label htmlFor="isHuman">로봇이 아닙니다~</label>
          <input
            type="checkbox"
            name="isHuman"
            value="yes"
            ref={register({ required: true })}
          />
          {errors.isHuman && <p style={{ color: 'red' }}>반드시 체크해주세요.</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="이메일을 입력하세요."
            type="email"
            ref={register({ required: true })}
          />
          {errors.email && <p style={{ color: 'red' }}>이메일을 반드시 입력해주세요.</p>}
        </div>

        <input type="submit"/>
      </form>
    </div>
  );
};

export default Basic;