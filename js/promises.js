console.log('Promise')

function getUserLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    console.log(url);

    return fetch(url, {headers: {'Authorization': githubKey}})
            .then((response) => response.json())
            .then((listOfEvents)=>{
                console.log(listOfEvents);
                for(let event of listOfEvents) {
                    if(event.type ==='PushEvent'){
                        return event.created_at;
                    }
                }
            })
}

console.log(getUserLastCommit('fmendoza'));
    //.then( date => console.log('Last commit date: ', date) );
document.querySelector('#getCommitDate').addEventListener('click', function(e){
    e.preventDefault();
    console.log('clicked');
    const input = document.querySelector('#username');

    console.log(input.value);
    getUserLastCommit(input.value).then((date)=>{
        console.log(date);
        const div = document.querySelector('#lastcommitdate');
        div.innerHTML = `Last commit was on ${date}`;
    });
})

