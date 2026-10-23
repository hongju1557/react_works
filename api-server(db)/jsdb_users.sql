-- users 테이블 생성
CREATE table users(
	id INT AUTO_INCREMENT PRIMARY key,
    username	VARCHAR(30) not null unique,
    password	VARCHAR(255) not null,
    email	VARCHAR(100) not null,
    role VARCHAR(20) not null DEFAULT 'user', -- user, admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 회원추가
insert into users(
username,
password,
email
) values ('user1','u111','user1@test.com');

select * from users;