const db = require('./../../../db');

const docRef = db.collection('meta-project').doc('overview');

exports.add = () => {
    console.log('All working!');
    docRef.set({
        name: 'some-name',
        experimentId: 2,
        experimentNotes: 'some-notes',
        description: 'some-description'
    })
}