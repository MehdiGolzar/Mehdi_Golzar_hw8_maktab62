/*--------------------------------------------------<< Merg >>--------------------------------------------------------------*/

let result = [];
for (const personDataItem of personData) {
    for (const additionalPersonDataItem of additionalPersonData) {
        if (personDataItem.uid === additionalPersonDataItem.uid) {
            // console.log(personDataItem);
            // console.log(additionalPersonDataItem);
            result.push({
                ...personDataItem,
                ...additionalPersonDataItem
            });
        }
    }
}
// console.log(result);

/*----------------------------------------------<< Read function >>--------------------------------------------------------*/

function Read() {
    console.log(result);
    return;
}
// Read();

/*----------------------------------------------<< Create function >>------------------------------------------------------*/

function Create(person) {
    // Condition for the input to be an object
    if (typeof person !== 'object' || Array.isArray(person) || person === null) {
        console.log(`Input type is invalid`);
        return;
    }

    // Condition for all personal information to be entered
    if (!person.uid || !person.firstName || !person.lastName || !person.position || !person.city) {
        console.log(`Input type is invalid`);
        return;
    }

    // Condition that the person does not already exist
    let targetPerson = result.find(el => el.uid === person.uid);
    if (targetPerson) {
        console.log(`Duplicated item`);
        return;
    }
    result.push(person);
}
// Create({uid: 10, firstName: 'Mehdi', lastName: 'Golzar', position: 'Back-End Developer', city: 'Tehran'})

/*----------------------------------------------<< Update function >>------------------------------------------------------*/

function Update(uid, person) {
    // Condition for the person to be an object
    if (typeof person !== 'object' || Array.isArray(person) || person === null) {
        console.log(`Input type is invalid`);
        return;
    }

    // Condition for the uid to be a number
    if (typeof uid !== 'number') {
        console.log(`Input type is invalid`);
        return;
    }

    // Condition that there is a person with the entered uid
    let targetPerson = result.find(el => el.uid === uid)
    if (!targetPerson) {
        console.log(`Does not exist`);
        return;
    }
    
    // Condition that the uid does not already exist
    if (uid !== person.uid) {
        let duplicatedPerson = result.find(el => el.uid === person.uid);
        if (duplicatedPerson) {
            console.log(`This "UID" belongs to someone else`);
            return;
        }
    }

    result = result.map(el => {
        if (el.uid === uid) {
            return {...el, ...person};
        }
        return el;
    })

}

// Update(1, {uid:10, firstName : 'Mehdi',lastName: 'Golzar', city:'Tehran' })

/*----------------------------------------------<< Delete function >>------------------------------------------------------*/

function Delete(uid) {
    // Condition for the uid to be a number
    if (typeof uid !== 'number') {
        console.log(`Input type is invalid`);
        return;
    }
    result = result.filter(el => el.uid !== uid);
    return alert(`Person successfully deleted`);
}

//   Delete(1);

