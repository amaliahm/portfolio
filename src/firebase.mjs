import {initializeApp} from "firebase/app"
import "firebase/storage"
import { getAnalytics } from "firebase/analytics";
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useState, useEffect } from "react";
import { getDownloadURL, listAll, ref, getStorage } from "firebase/storage";


//

let database = false;
let storage = false;

const getDatabase = () => {
    if (!database) {
        const firebaseConfig = {
            apiKey: "AIzaSyBA6g2KZHVFudo9xnWIT5SkNd0rzB6wWvc",
            authDomain: "portfolio-2e5a4.firebaseapp.com",
            projectId: "portfolio-2e5a4",
            storageBucket: "portfolio-2e5a4.appspot.com",
            messagingSenderId: "227796336404",
            appId: "1:227796336404:web:882016b55a3872a2e80c01",
            measurementId: "G-LEL9Z139TQ"
        };
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        database = getFirestore(app)
    }
    return database
}
const getstorage = () => {
    if (!storage) {
        const firebaseConfig = {
            apiKey: "AIzaSyBA6g2KZHVFudo9xnWIT5SkNd0rzB6wWvc",
            authDomain: "portfolio-2e5a4.firebaseapp.com",
            projectId: "portfolio-2e5a4",
            storageBucket: "portfolio-2e5a4.appspot.com",
            messagingSenderId: "227796336404",
            appId: "1:227796336404:web:882016b55a3872a2e80c01",
            measurementId: "G-LEL9Z139TQ"
        };
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        storage = getStorage(app)
    }
    return storage
}

//get about 

const findAbout  = async () => {
    const docs_ref = await getDocs(collection(getDatabase(), "overview"))
    const res = []
    docs_ref.forEach(e => {
        res.push(e._document.data.value.mapValue.fields.short.stringValue.split(','))
        // console.log(e._document.data.value.mapValue.fields.introduction.stringValue)
    })
    return res[0]
}

//get overview 

const findOverview = async () => {
    const docs_ref = await getDocs(collection(getDatabase(), "overview"))
    const res = []
    docs_ref.forEach(e => {
        res.push(e._document.data.value.mapValue.fields.introduction.stringValue)
    })
    return res
}

const findExperiences = async () => {
    const docs_ref = await getDocs(collection(getDatabase(), "experiences"))
    const res = []
    docs_ref.forEach((e) => {
        const result = e._document.data.value.mapValue.fields
        res.push({
            title: result.title.stringValue,
            date: result.date.stringValue,
            points: result.points.arrayValue.values
        })
    })
    return res
}

const findFeedbacks = async () => {
    const docs_ref = await getDocs(collection(getDatabase(), "feedbacks"))
    const res = []
    docs_ref.forEach((e) => {
        const result = e._document.data.value.mapValue.fields
        res.push({
            name: result.name.stringValue,
            testimonial: result.testimonial.stringValue,
            job: result.job.stringValue,
        })
    })
    return res

}


export {findAbout, findOverview, findExperiences, findFeedbacks}