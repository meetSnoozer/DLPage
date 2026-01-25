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

class PlayerDetails{
    constructor(username,highesLevel,coins,highscores,skins,bestTimes,achievements){
        this.username = username,
        this.highesLevel = highesLevel,
        this.coins = coins,
        this.highscores = highscores,
        this.skins = skins,
        this.bestTimes = bestTimes,
        this.achievements = achievements
    }
}
const detailList = []
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionRef = collection(db,"DataScapePlayerBase");
    const firebaseQuery = await getDocs(collectionRef);
    var uname = localStorage.getItem("uname");

    let username = "";
    firebaseQuery.forEach(doc=>{
        let id = doc.id;
        if(id==uname){
            const user = new PlayerDetails(
                doc.data().username,
                doc.data().highesLevel,
                doc.data().coins,
                doc.data().highscores,
                doc.data().skins,
                doc.data().bestTimes,
                doc.data().achievements
        )
        detailList.push(user)
        }
    })
console.log(detailList[0])

console.log(`Username: ${detailList[0].username}`);

const coinCount = document.getElementById("coins");
const hLevel = document.getElementById("hlevel");
const ach = document.getElementById("ach");
const skinCount = document.getElementById("skins");

coinCount.textContent = detailList[0].coins;
hLevel.textContent = detailList[0].highesLevel;
ach.textContent = detailList[0].achievements.length;
skinCount.textContent = detailList[0].skins.length;

const welcomeLabel = document.getElementById("welcome");
welcomeLabel.textContent = `Welcome, ${detailList[0].username} !`