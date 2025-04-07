// src/pages/MainPage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPanel = styled.div`
  width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
`;

const RightPanel = styled.div`
  flex: 1;
  background-color: #fff;
`;

function MainPage() {
  // 여기서 DB에서 친구 목록 불러오기 예정
  const dummyFriends = ['Alice', 'Bob', 'Charlie'];

  return (
    <Container>
      <LeftPanel>
        <h2>Friends</h2>
        <ul>
          {dummyFriends.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </LeftPanel>
      <RightPanel>
        {/* 팝업창 뜰 곳 */}
      </RightPanel>
    </Container>
  );
}

export default MainPage;
