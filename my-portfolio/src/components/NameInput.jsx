import { useState } from "react";

export default function NameInput({ name, setName, inputRef }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    inputRef.current?.focus();
    setShowMessage(true); // 버튼 눌렀을 때만 문구 보이기
  };

  return (
    <div className="name-form-wrapper">
      <form onSubmit={(e) => e.preventDefault()} className="name-form">
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요!"
          maxLength={30}
          className="name-input"
        />
        <button onClick={handleClick} className="button">
          입력
        </button>
      </form>

      {/* 버튼 누른 후에만 문장 출력 */}
      {showMessage && name && (
        <p className="live-preview">{name}님!! 포트폴리오에 오신 걸 환영합니다!</p>
      )}
    </div>
  );
}
