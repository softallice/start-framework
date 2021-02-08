## 기본 프론트엔드 및 백엔드 시스템 프레임워크

### 시스템 구성 요소
* 프론트 엔드
    * 화면 구성 [Quasar](https://quasar.dev)
    * 기반 언어 [Vue.js](https://vuejs.org)
* 백엔드 API 서버
    * 기반 프레임워크 [FeathersJS](https://feathersjs.com/) 
    * 인증 관리 [feathers-authentication-management](https://github.com/feathers-plus/feathers-authentication-management)
* 데이터 베이스 
    * 비즈니스 로직 [postgresql](https://www.postgresql.org/)
    * 사용자 관리 [mongoDB](https://www.mongodb.com/)
* 인프라 구성
    * 암호화 정보 저장 관리 [HashiCorp-Vault](https://www.vaultproject.io/)
    * 개발 환경 및 배포 환경 [Docker](https://www.docker.com/)
    * 푸시 및 메시지 [Firebase](https://firebase.google.com/)
### 기능 요소
#### 화면 구성 요소 
- 사용자 등록(Register User)
- 로그인(Login User)
- 사용자 정보 변경(Update account)
- 비밀번호 관리(Reset/Forgot Password)
- 사용자 관리(Admin User Management - update profile/role, send password reset, deactivate user)
- 로그아웃(Logout)
- 화면 템플릿(Template)
    - 대시보드(Dashboard)
    - 카드단위 화면 구성(Card)
    - .... 등

### 설치 준비 사항

해당 버전은 테스트 진행시 버전이고 docker와 docker-compose 만 설치되어 있어도 진행 가능, 단 프로덕션 모드는 아래의 툴들이 전부 설치 되어야 함

* git [git-scm](https://git-scm.com/)
* docker : 20.0.0 [Docker](https://www.docker.com/)
* docker-compose : 1.24.0 [Docker Compose](https://docs.docker.com/compose/)
* node.js : v12 [node.js](https://nodejs.org/ko/)
* nvm : 0.33.11
* Feathers [configuration documentation](https://docs.feathersjs.com/api/configuration.html)
* Quasar [install the Quasar CLI](https://quasar.dev/quasar-cli/installation)

### 소스 다운로드 

### 폴더 구조
```sh
.
├── client
│   ├── dist
│   ├── public
│   ├── src
│   └── src-pwa
├── images
│   └── client-web
├── scripts
├── server
│   ├── config
│   ├── migrations
│   ├── public
│   ├── src
│   └── test
└── vault
    ├── backup
    ├── config
    ├── dhv
    ├── hvac
    └── scripts
```

### 개발 모드
```sh
cd start-framework
make framework-dev-start
```

### 운영 모드
```sh
cd start-framework
make framework-prod-start
```

### vault 실행
```sh
cd start-framework
make vault-start.sh
```

### 시스템 실행 화면

* 화면 : http://localhost:8085
* vault ui : http://localhost:8020
    1. 화면 id/pw : webui/webui
    2. Secret Backends > add new secret backend(type : kv ) 생성
    3. System > policies > add policy 생성
    4. Auth Backends > token > new token(위에서 설정한 policy 적용)