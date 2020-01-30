fetch('https://randomuser.me/api/?seed=levhita&results=18&inc=name,phone,email,picture')
.then((response) => {
    return response.json();
})
.then((myJson) => {
    const cleanData = myJson.results.map( (e) => {
        return {
            name: `${e.name.first} ${e.name.last}`,
            status: 'Not in API',
            bio: 'Not in API',
            profession: 'Not in API',
            email: e.email,
            phone: e.phone,
            picture: e.picture
        }
    });

    
    console.log(cleanData);
});