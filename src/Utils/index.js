//참조자료 : https://www.youtube.com/watch?v=tYMLXpOJtng
//다른 테스트에서도 사용할 수 있게 만드는 tdd
//date-test는 className이 있는지 테스트할 때 className으로 통일해놓으면
//다른 개발자가 봤을 때 이해되지 않을 수도 있기에 차별화하기 위해 className 대신 사용

import checkPropTypes from "check-prop-types";

export const findByTestAtrr = (component, attr) => {
  const wrapper = compoenent.find(`[data-test='${attr}]`);
  return wrapper;
};

//shallow함수를 다르게 사용하는 법

const setUp = (props = {}) => {
  const component = shallow(<Heder {...props} />);
  return component;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
