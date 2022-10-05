```
vue3, typescript, webpack 이 기본 스택

// ref : https://cli.vuejs.org/guide/creating-a-project.html

app 은 vue create
vue3 default로 생성
(vue add로 해서 pinia, router, pwa 추가, yarn add sass, sass-loader, prettier (관련 셋) 추가)

-> 추가 설치 명령어
vue add pinia
vue add router
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn add -D sass sass-loader
vue add pwa

app-2 는 vue create
vue3 feature custom 으로 생성
(vuex, router, sass/scss, pwa 추가, eslint/prettier)

app-3 는 vue create
vue3 feature custom 으로 생성
(router, sass/scss, pwa, eslint/airbnb)

props typescript 코드는 app의 기본을 참고
directory 와 구조는 app2의 기본을 참고
airbnb style eslint app3의 기본을 참고

eslint, prettier는 기본적인 건 섞어야할듯
(airbnb는 룰이 깐깐해서 커스텀 옵션이 늘어나게되어서 필요시 고려)

tsconfig.json allowJs 설정 통해서 js파일과 ts파일 공존가능한지 확인 필요
(어떻게까지 작업 가능한지)

타입스크립트 공부는

https://joshua1988.github.io/ts/

https://type-level-typescript.com
- TS의 기본 개념을 소개하고, Type 문제를 풀어볼 수 있도록 제공
저 링크 내용은 그냥 내리셔도 대고영 하단에 박스들 중 학습하고 싶은거 누르시고,
설명글과 다시 하단에 문제들 있어여 직접 타입 문제 풀어보는 아티클이에여

책은 타입스크립트 프로그래밍, 이펙티브 타입스크립트 (둘다 오레일리) 같이 스터디하면 좋을듯

vuex -> pinia

https://pinia.vuejs.org/
```
