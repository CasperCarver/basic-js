class VigenereCipheringMachine {
     a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    constructor(direct = true) {
      this.direct = direct;
    }
  
    cipher = function(str, key, direction) {
      let r = '';
  
      str = str.toUpperCase();
      key = key.toUpperCase();
  
      for (let i = 0, j = 0; i < str.length; i++) {
        if (this.a.includes(str[i])) {
          let strPos = this.a.indexOf(str[i]);
          let keyIndex = key[j >= key.length ? j % key.length : j];
          let keyPos = this.a.indexOf(keyIndex);
  
          keyPos = typeof direction !== "undefined" && direction.indexOf("decrypt") !== -1 ? -keyPos : keyPos;
          r += this.a[(this.a.length + (strPos + keyPos)) % this.a.length];
          j++;
        } else {
          r += str[i];
        }
      }
  
      if (!this.direct)
        return r
          .split("")
          .reverse()
          .join("");
  
      return r;
    };
  
    encrypt(str, key) {
      if (!str || !key) throw new Error();
  
      return this.cipher(str, key);
    }
  
    decrypt(str, key) {
      if (!str || !key) throw new Error();
  
      return this.cipher(str, key, "decrypt");
    }
  }
  
  module.exports = VigenereCipheringMachine;



var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		//Строка алфавита
var m = "Samelengthkey";						//Сообщение
var k = "Samelengthkey";					
let mode ="";	//Ключ
//(encrypt/decrypt) for "Gronsfeld" + "Vizhener" + "Beaufort" + "Shifted Atbash"
	//mode - режим:
	//	Шифрование: 	"encrypt" (по умолчанию),
	//	Дешифрование: 	"decrypt" (mode === 'decrypt'),
	

	var maxlength = Math.max(m.length, k.length);
	var r = '';	//Пустой результат
	for(i=0; i<maxlength; i++){ 			//encrypt/decrypt
		//Vizhener - encrypt/decrypt one forumula (encrypt - by default; decrypt - when (mode === 'decrypt') )
		var mi = a.indexOf( m[ ( (i>=m.length) ?i%m.length :i ) ] );	//подгон сообщения/шифротекста - к ключу (если меньше)
		var ki_s = k[ ( (i>=k.length) ?i%k.length :i ) ];
		//подгон ключа к сообщению/шифротексту (если короткий)
		//var ki = (typeof mode !== 'undefined' && mode.indexOf('gronsfeld') !== -1) ? parseInt( ki_s ): a.indexOf( ki_s );
		//вычитание при дешифровании, либо сложение.
		var ki = ( ( mode.indexOf('decrypt') !== -1) ?(-ki) :ki );
		c = a[ ( ( ( a.length + ( mi + ki ) ) % a.length ) ) ];				//символ по таблице Виженера.
		r += c;																//Добавить символ к результату.
	}
    
    console.log(r); //вернуть строку результата



