  const sCount = document.getElementById("saleCount");
  const sTotal = document.getElementById("saleTotal");
  const tAccounts = document.getElementById("totalAccounts");
  const sRundown = document.getElementById("sales-rundown");
  let transactions = [];
  let saleCount = 0;
  let saleTotal = 0;
  let totalAccounts = 0;
  sCount.innerHTML = `${saleCount} total sales`;
  sTotal.innerHTML = `${saleTotal} total amount`;
tAccounts.innerHTML = `${totalAccounts} accounts`;
class transaction{
    constructor(amount,date,item){
        this.amount = amount;
        this.date = date;
        this.item = item;
    }
}
/*
const s1 = new transaction(50,"2026-01-25","5 gold");
transactions.push(s1);
const s2 = new transaction(50,"2026-01-25","5 gold");
transactions.push(s2);
const s3 = new transaction(50,"2026-01-25","5 gold");
transactions.push(s3);
*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
  import { getFirestore, collection,getDocs} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';





 const firebaseConfig = {
    apiKey: "AIzaSyCtDBFbZ9QBhqchyaPVAce145IMPzekYWA",
    authDomain: "dlpage-e807c.firebaseapp.com",
    projectId: "dlpage-e807c",
    storageBucket: "dlpage-e807c.firebasestorage.app",
    messagingSenderId: "216742989828",
    appId: "1:216742989828:web:c8193623b5ecc8a1862551"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const collectionRef = collection(db,"DataScapeSales");
  const firebaseQuery = await getDocs(collectionRef);
  firebaseQuery.forEach((doc)=>{
    //console.log(doc.id,"->",doc.data());
    const samp = new transaction(doc.data().amount,doc.data().date,doc.data().item);
    console.log(samp);
    transactions.push(samp);
    saleCount++;
    saleTotal+=doc.data().amount;
  })
    
     sCount.innerHTML = `${saleCount} total sales`;
  sTotal.innerHTML = `${saleTotal} total amount`;
tAccounts.innerHTML = `${totalAccounts} accounts`;

/*

*/
transactions.forEach(e=>{
    console.log(e.item)
    const newDiv = document.createElement('div');
    newDiv.className = "top-inner-container";
    const newDate = document.createElement('p');
    const newItem = document.createElement('p');
    const newAmount = document.createElement('p');
    newDate.textContent = e.date;
    newItem.textContent = e.item;
    newAmount.textContent = e.amount;
    newDiv.appendChild(newDate);
    newDiv.appendChild(newItem);
    newDiv.appendChild(newAmount);
    sRundown.appendChild(newDiv);
})