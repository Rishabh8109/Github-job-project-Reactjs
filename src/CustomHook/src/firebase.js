

    import firebase from "firebase";

        const firebaseApp = firebase.initializeApp({
                apiKey: "AIzaSyAhPEWWT3gGcen4r3XpGDYpuRcsZsdfPpg",
                authDomain: "e-clone-a2e8a.firebaseapp.com",
                databaseURL: "https://e-clone-a2e8a.firebaseio.com",
                projectId: "e-clone-a2e8a",
                storageBucket: "e-clone-a2e8a.appspot.com",
                messagingSenderId: "560443668937",
                appId: "1:560443668937:web:6216e22a729bd14d4e1018",
                measurementId: "G-LD6TMJGYFC"
        });

    const auth = firebase.auth();

    export default  auth;