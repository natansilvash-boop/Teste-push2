// Configuração do Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

document.getElementById("subscribe").addEventListener("click", async () => {
    try {
        const registration = await navigator.serviceWorker.register("service-worker.js");
        const token = await messaging.getToken({ vapidKey: "YOUR_VAPID_KEY" });
        console.log("Token:", token);
    } catch (error) {
        console.error("Erro ao obter token:", error);
    }
});
