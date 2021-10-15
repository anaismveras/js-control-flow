let helloWorldDifLang = {
    english: "Hello World",
    spanish: "Hola Mundo",
    german: "Hallo Welt",
    hindi: "नमस्ते दुनिया"
  };
  
const languages = 'ES'

if (languages.toLowerCase() == 'en') {
  console.log('Hello World')
} else if (languages.toLowerCase() == 'es') {
  console.log('Hola Mundo')
} else if (languages.toLowerCase() == 'de') {
  console.log('Hallo Welt')
} else if (languages.toLocaleLowerCase() == 'hd') {
  console.log("नमस्ते दुनिया") 
} else {
  console.log('Please enter either Enlish, Spanish, German or Hindi')
  }