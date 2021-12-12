# durumari

## Stack
1. vscode
1. jquery
1. animejs
1. node : v14.16.1
1. typescript


## File Structure

```text
./
├── docs
├── (css)
├── (js)
├── (fonts)
└── contents
    └── {학년}                  # ex) 3rd_grade
        └── {항목}               # ex) lesson_1 
            └── {차시}               # ex) unit_1
                ├── {차시코드_n}         # 0921E00021103_01 n: 화면 단위의 컨텐츠
                |   ├── (css)               # 해당 화면에 적용되는 css
                |   └── images            # 해당 화면에 필요한 이미지
                └── common
                    ├── components
                    ├── mp3
                    ├── (css)
                    └── (js)
```

- docs : 프로젝트에 대한 전반적인 문서

- css : 런처와 관련된 css (추후에 제거 예정)

- js : 런처와 관련된 스크립트 (추후에 제거 예정)

- fonts : 폰트 (추후에 제거 예정)

- contents : 차시 단위의 컨텐츠