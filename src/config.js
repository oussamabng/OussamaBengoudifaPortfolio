
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL  } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  "projectId": "portfolio-ff960",
  "appId": "1:138400808332:web:c2c1e94df061870889aaa9",
  "storageBucket": "portfolio-ff960.appspot.com",
  "locationId": "europe-west",
  "apiKey": "AIzaSyDx7UKw4Xxg-V7et0VqciacVIZ5tm3bGLA",
  "authDomain": "portfolio-ff960.firebaseapp.com",
  "messagingSenderId": "138400808332",
  "measurementId": "G-XR9VCE56E2"
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const userId = "O2EFVIe5bi8N6vfEx5CE"

async function getPortfolio(db) {
  const portfolioCol = collection(db, 'users')
  const portfolioSnapshot = await getDocs(portfolioCol);
  if (portfolioSnapshot._docs[0].id !== userId){
    return {}
  }
  const portfolioList = portfolioSnapshot.docs.map(doc => doc.data());
  return portfolioList[0];
}


async function getSkills(db) {
  const skillsCol = collection(db, 'skills')
  const skillsSnapshot = await getDocs(skillsCol);
  const skillsList = skillsSnapshot.docs.map(doc => doc.data());
  return skillsList;
}
async function getProjects(db) {
  const projectsCol = collection(db, 'projects')
  const projectsSnapshot = await getDocs(projectsCol);
  const projectsList = projectsSnapshot.docs.map(doc => doc.data());
  return projectsList;
}

async function getEducations(db) {
  const educationsCol = collection(db, 'educations')
  const educationsSnapshot = await getDocs(educationsCol);
  var educationsList = educationsSnapshot.docs.map(doc => doc.data());
  educationsList.sort((a,b)=> new Date(a.date_start) - new Date(b.date_start));
  return educationsList;
}
async function getExperiences(db) {
  const experiencesCol = collection(db, 'experiences')
  const experiencesSnapshot = await getDocs(experiencesCol);
  var experiencesList = experiencesSnapshot.docs.map(doc => doc.data());
  experiencesList.sort((a,b)=> new Date(a.date_start) - new Date(b.date_start));
  return experiencesList;
}


//? storage 

async function getPortfolioImage(storage){
  const httpsReference  = ref(storage, 'gs://portfolio-ff960.appspot.com/portfolio.jpeg');
  const url = await getDownloadURL(httpsReference);
  return url;
}

async function getPortfolioCV(storage){
  const httpsReference  = ref(storage, 'gs://portfolio-ff960.appspot.com/CV.pdf');
  const url = await getDownloadURL(httpsReference);
  return url;
}

export { db,storage,getPortfolio,getSkills,getPortfolioImage,getPortfolioCV,getProjects,getEducations,getExperiences }