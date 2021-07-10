# Image Processing API

This project aims to provide an api that process images and save thumbnail for a proper size. When repetitive request for a particular image in a particular size, it returns cached thumbnail instead of regenerating it. 

## Getting Started

1. **Download git repository:**
```
git clone https://github.com/rooftopwang/image-processing-api.git
```

2. **Install npm dependencies:**
```
npm install
```

## Instructions
1. **Reformatting project with Prettier referencing config file .prettierrc:**

```
npm run prettier
```

2. **Build project from TypeScript to Javascript:**

```
npm run build
```

3. **Test project with ESLint referencing config file .eslintrc.json:**

```
npm run lint
```

4. **Test project build JavaScript files with Jasmine referencing spec/support/Jasmine.json:**

```
npm run jasmine
```

5. **Run Modemon:**

```
npm run start
```
App will run in localhost: 3000

## Testing Endpoints
```
Visiting <http://localhost:3000/app/images/?image=CUSTOMIZED_NAME&width=CUSTOMIZED_WIDTH&height=CUSTOMIZED_HEIGHT>
with any positive number CUSTOMIZED_WIDTH and CUSTOMIZED_HEIGHT
available CUSTOMIZED_NAME are 'encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'
```

```
Unexpected endpoint are properly handled. 
try the following endpoints. 
<http://localhost:3000/>
<http://localhost:3000/app/>
<http://localhost:3000/app/images/>
<http://localhost:3000/app/images/?image=WRONG_NAME&width=INVALID_WIDTH&height=MISSING_HEIGHT>
```


## Version Control

Branch origin/main is updated with latest commit. 

## License

[License](LICENSE.txt)
