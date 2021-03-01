import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Greeting from "../src/components/Greeting";
import '@testing-library/jest-dom/extend-expect';
import LoginForm from "../src/components/LoginForm";

/*
  render(): DOM 에 컴포넌트를 렌더링 해주는 함수
  fireEvent (object): 특정 이벤트를 발생시켜주는 객체
 */

describe('Testing Counter Component', () => {
  it('Rendering Greeting Component', () => {
    render(<Greeting name="최은기" />);
    const helloValue = screen.getByText('Hello, 최은기');
    // toBeInTheDocument: 해당 엘리먼트가 화면에 존재하는 지 검증한다.
    expect(helloValue).toBeInTheDocument();
    const strictHelloValue = screen.getByText(/^Hello/);
    expect(strictHelloValue).toHaveTextContent('Hello, 최은기');
  });

  it('Catch a img Tag', () => {
    render(<Greeting name='최은기' />);
    const image = screen.getByAltText('404');
    expect(image).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif',
    );
    expect(image).toHaveAttribute(
      'alt',
      '404',
    );
  });

  it('testing dynamic Components', () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);
    const button = screen.getByText('로그인');
    const emailInput = screen.getByLabelText('이메일');
    const passwordInput = screen.getByLabelText('비밀번호');

    expect(button).toBeDisabled();

    fireEvent.change(
      emailInput,
      { target: { value: 'user@test.com' }}
    );
    fireEvent.change(
      passwordInput,
      { target: { value: 'Test1234' }}
    );

    expect(button).toBeEnabled();

    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(2);
  });
});
