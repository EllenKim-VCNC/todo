# TODO

`yarn start`

## TODO 추가, 삭제 구현

1. html, CSS 작성
2. TODO list 배열
3. 리스트 개수만큼 List컴포넌트 출력
4. input에 텍스트가 입력되면 (onChange 이벤트 발생) setState로 변화될때마다 담기
5. 추가 버튼 누르면 (onClick 이벤트 발생) TODO list 배열에 추가
   5-1. input value 삭제
   5-2. 빈 문자열이면 return
6. 삭제 버튼 누르면 (onClick 이벤트 발생) TODO list 배열에서 해당 리스트 삭제

## TypeScript, Styled Components, yarn 변경

## CRUD 구현

1. Promise => async, await
2. Create, Read, Delete 구현
3. service 분리
4. Update 구현

## Sign in, Sign up 구현

1. Sign up

- username, password 전송
  => 성공 (return값이 없으면) Sign in으로 돌아가기
  => 에러가 있다면 에러메세지 출력

2. Sign in

- usename, password 전송
  => 성공 => 토큰 저장 => 저장된 토큰으로 Todo 출력 => Todo 보여주기
  => => 에러가 있다면 에러메세지 출력

## todo

- [ ] fetch => axios로 변환, 차이
