import React from "react";

// 간단한 회원가입 폼
/**
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 */

const Register = () => {
  const [input, setInput] = React.useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    const target = e.target;

    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  console.log(input);

  return (
    <div>
      <div className="name">
        <input
          name="name"
          type="text"
          value={input.name}
          placeholder={"이름"}
          onChange={onChange}
        />
      </div>

      <div className="birth">
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>

      <div className="country">
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
        </select>
      </div>

      <div className="bio">
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </div>
  );
};

export default Register;
