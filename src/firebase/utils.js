import firebase from 'firebase';

export default {
    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    logout() {
        return firebase.auth().signOut();
    },
    save(mainChild, values) {
        return firebase
            .database()
            .ref()
            .child(mainChild)
            .push(values);
    },
    saveToChild(mainChild, secondChild, values) {
        return firebase
            .database()
            .ref()
            .child(mainChild)
            .child(secondChild)
            .push(values);
    },
    list(reference, callback, error) {
        firebase
            .database()
            .ref(reference)
            .on('value', resp => callback(resp), err => error(err));
    }
};
